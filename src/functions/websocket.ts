import {
  ConnectionId,
  validateConnectionId,
  validateWebsocketConnectQueryParameters,
  validateWebsocketEventType,
  validateWebsocketMessageRequestBody,
  WebsocketConnectQueryParameters
} from '@animando/chat-types';
import { ApiGatewayManagementApi } from 'aws-sdk';
import deleteConnection from '../lib/dao/connection/delete-connection';
import saveConnection from '../lib/dao/connection/save-connection';
import { processMessage } from '../lib/websocket/process-message';

const sendError = async (agma: ApiGatewayManagementApi, connectionId: ConnectionId, error: any) =>
  agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify({ error }),
  }).promise();

const initConnection = async (connectionId: ConnectionId, qsp: WebsocketConnectQueryParameters) => {
  console.log('initConnection', qsp);
  return saveConnection(connectionId, qsp.room, qsp.author);
};

const onDisconnect = async (connectionId: ConnectionId) =>
  deleteConnection(connectionId);

export const handler = async (event: any) => {
  const {
    eventType: incomingEventType,
    connectionId,
    domainName,
    stage,
  } = event.requestContext;
  const { queryStringParameters } = event;

  const agma = new ApiGatewayManagementApi({
    endpoint: `${domainName}/${stage}`,
  });
  try {
    const eventType = validateWebsocketEventType(incomingEventType);
    switch (eventType) {
      case 'CONNECT':
        await initConnection(
          validateConnectionId(connectionId), validateWebsocketConnectQueryParameters(queryStringParameters));
        break;
      case 'DISCONNECT':
        await onDisconnect(validateConnectionId(connectionId));
        break;
      case 'MESSAGE':
        await processMessage(
          agma, validateConnectionId(connectionId), validateWebsocketMessageRequestBody(event.body));
        break;
    }
  } catch (e) {
    console.error(e);
    sendError(agma, connectionId, e);
  }

  console.log('Finishing');
  return {
    statusCode: 200,
  };
};
