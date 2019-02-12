import saveConnection from '../lib/save-connection';
import deleteConnection from '../lib/delete-connection';
import { ApiGatewayManagementApi } from 'aws-sdk';
import { processMessage } from '../lib/process-message';
import { ConnectionId } from 'aws-sdk/clients/directconnect';

export type Agma = ApiGatewayManagementApi;

const sendError = async (agma: Agma, connectionId: ConnectionId, error: any) =>
  agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify({ error }),
  }).promise();

const initConnection = async (connectionId: ConnectionId, room: string, author: string) => {
  console.log('initConnection', room, author);
  return saveConnection(connectionId, room, author);
}

const onDisconnect = async (connectionId: ConnectionId) =>
  deleteConnection(connectionId);

export const handler = async (event: any) => {
  const {
    eventType,
    connectionId,
    domainName,
    stage,
  } = event.requestContext;
  const { queryStringParameters } = event;
  const { room, author } = (queryStringParameters || {}) as any;

  const agma = new ApiGatewayManagementApi({
    endpoint: `${domainName}/${stage}`,
  });
  try {
    switch (eventType) {
      case 'CONNECT':
        await initConnection(connectionId, room, author);
        break;
      case 'DISCONNECT':
        await onDisconnect(connectionId);
        break;
      case 'MESSAGE':
        await processMessage(agma, connectionId, JSON.parse(event.body));
        break;
      default:
        console.error(`Unknown eventType: ${eventType}`);
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
