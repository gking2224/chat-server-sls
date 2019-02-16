import {
  ConnectionId,
  validateConnectionId,
} from '@animando/chat-types';
import { LogMessage, LogMessageValidation, validateLogMessage } from '@animando/cloud-app-logging';
import { ApiGatewayManagementApi } from 'aws-sdk';
import { Record, Static, String, Union } from 'runtypes';

const sendError = async (agma: ApiGatewayManagementApi, connectionId: ConnectionId, error: any) =>
  agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify({ error }),
  }).promise();
const EnrichedLogMessageValidation = Record({
  connectionId: String,
  message: LogMessageValidation,
  sourceIp: String,
});
type EnrichedLogMessage = Static<typeof EnrichedLogMessageValidation>;
const validateEnrichedLogMessage = (m: any) => EnrichedLogMessageValidation.check(m);

const logMessage = async (m: EnrichedLogMessage) => {
  // tslint:disable-next-line:max-line-length
  console.log(`${m.connectionId} ${m.sourceIp} ${m.message.application} ${m.message.severity.toUpperCase()}: ${m.message.message}`);
};

export const handler = async (event: any) => {

  const {
    eventType,
    connectionId,
    domainName,
    stage,
    identity,
  } = event.requestContext;

  const sourceIp = (identity) ? identity.sourceIp : '<UNKNOWN IP>';

  const agma = new ApiGatewayManagementApi({
    endpoint: `${domainName}/${stage}`,
  });
  try {
    switch (eventType) {
      case 'CONNECT':
        console.log(`Connect: ${connectionId}`);
        break;
      case 'DISCONNECT':
        console.log(`Disconnect: ${connectionId}`);
        break;
      case 'MESSAGE':
        const body = JSON.parse(event.body);
        logMessage(validateEnrichedLogMessage({ message: validateLogMessage(body), connectionId, sourceIp }));
        break;
    }
  } catch (e) {
    console.error(e);
    sendError(agma, validateConnectionId(connectionId), e);
  }

  console.log('Finishing');
  return {
    statusCode: 200,
  };
};
