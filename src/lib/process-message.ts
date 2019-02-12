import { Agma } from "../functions/websocket";

import saveMessage from './save-message';
import getMessages from './get-messages';
import { IncomingSocketMessage, PostNewMessage, DoInitialize } from "../model/api/message";
import { SavedMessage } from "../model/domain/message";
import getConnectionsByRoom from "./get-connections-by-room";
import { publishMessage } from "./publish-to-websocket";
import { ConnectionId } from "../model/domain/connection";

const sendAllRoomMessages = async (agma: Agma, connectionId: ConnectionId, messages: SavedMessage[]) => {
  await publishMessage(agma, connectionId, { action: 'init', messages });
};

const sendMessageToRoom = async (agma: Agma, message: SavedMessage) => {
  const connectionIds = await getConnectionsByRoom(message.room)
    .then((c) => c.map((c) => c.connectionId));
  await publishMessage(agma, connectionIds, { action: 'message', message });
}

const onInitialiseConnection = async (agma: Agma, connectionId: ConnectionId, message: DoInitialize) => {
  const messages = await getMessages(message.room);
  await sendAllRoomMessages(agma, connectionId, messages);
};

const onMessageReceived = async (agma: Agma, message: PostNewMessage) => {
  const saved = await saveMessage(message);
  await sendMessageToRoom(agma, saved);
};

export const processMessage = async (agma: Agma, connectionId: ConnectionId, body: IncomingSocketMessage) => {
  switch (body.action) {
    case 'init':
      await onInitialiseConnection(agma, connectionId, body);
      break;
    case 'message':
      await onMessageReceived(agma, body);
      break;
    default:
  }
};
