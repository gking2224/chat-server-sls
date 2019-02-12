import { Agma } from "../functions/websocket";
import { OutgoingSocketMessage } from "../model/api/message";

export const publishMessage = (agma: Agma, connectionId: string | string[], message: OutgoingSocketMessage) => {
  let connectionIds = Array.isArray(connectionId) ? connectionId : [connectionId];
  const payload = JSON.stringify(message);
  return Promise.all(connectionIds.map((c) => {
    return agma.postToConnection({
      ConnectionId: c,
      Data: payload,
    }).promise();
  }));
}
