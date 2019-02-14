import { ConnectionId, WebsocketMessageResponse } from '@animando/chat-types';
import { ApiGatewayManagementApi } from 'aws-sdk';

export const publishMessage =
  (agma: ApiGatewayManagementApi, connectionId: ConnectionId | ConnectionId[], message: WebsocketMessageResponse) => {
    const connectionIds = Array.isArray(connectionId) ? connectionId : [connectionId];
    const payload = JSON.stringify(message);
    return Promise.all(connectionIds.map((c) => {
      return agma.postToConnection({
        ConnectionId: c,
        Data: payload,
      }).promise();
    }));
  };
