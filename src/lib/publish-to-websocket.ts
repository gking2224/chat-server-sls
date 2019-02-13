import { ApiGatewayManagementApi } from "aws-sdk";
import { ConnectionId, OutgoingSocketMessage } from "chat-types";

export const publishMessage =
  (agma: ApiGatewayManagementApi, connectionId: ConnectionId | ConnectionId[], message: OutgoingSocketMessage) => {
    let connectionIds = Array.isArray(connectionId) ? connectionId : [connectionId];
    const payload = JSON.stringify(message);
    return Promise.all(connectionIds.map((c) => {
      return agma.postToConnection({
        ConnectionId: c,
        Data: payload,
      }).promise();
    }));
  }
