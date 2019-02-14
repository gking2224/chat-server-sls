import {
  ConnectionId,
  validateConnectionId,
} from '@animando/chat-types';
import { ApiGatewayManagementApi } from 'aws-sdk';
import { Literal, Record, Static, String, Union } from 'runtypes';

const sendError = async (agma: ApiGatewayManagementApi, connectionId: ConnectionId, error: any) =>
  agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify({ error }),
  }).promise();
const Severity = Union(
  Literal('debug'),
  Literal('error'),
  Literal('warn'),
  Literal('trace'),
  Literal('fatal'),
  Literal('info'),
);
const LogMessageValidation = Record({
  connectionId: String,
  logStream: String,
  message: String,
  severity: Severity,
});
type LogMessage = Static<typeof LogMessageValidation>;
const validateLogMessage = (m: any) => LogMessageValidation.check(m);

const logMessage = async (m: LogMessage) => {
  console.log(`${m.connectionId} ${m.logStream} ${m.severity.toUpperCase()}: ${m.message}`);
};

export const handler = async (event: any) => {
  const {
    eventType,
    connectionId,
    domainName,
    stage,
  } = event.requestContext;

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
      case 'MESSAGE':
        const body = JSON.parse(event.body);
        const { action, ...rest } = body;
        logMessage(validateLogMessage({ ...rest, connectionId }));
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
