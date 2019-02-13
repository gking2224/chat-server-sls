import saveMessage from './save-message';
import getMessages from './get-messages';
import getConnectionsByRoom from "./get-connections-by-room";
import { publishMessage } from "./publish-to-websocket";
import { ApiGatewayManagementApi } from 'aws-sdk';
import { ConnectionId, SavedMessage, DoInitialize, PostNewMessage, IncomingSocketMessage } from 'chat-types';

const sendAllRoomMessages = async (ApiGatewayManagementApi: ApiGatewayManagementApi, connectionId: ConnectionId, messages: SavedMessage[]) => {
  await publishMessage(ApiGatewayManagementApi, connectionId, { action: 'init', messages });
};

const sendMessageToRoom = async (ApiGatewayManagementApi: ApiGatewayManagementApi, message: SavedMessage) => {
  const connectionIds = await getConnectionsByRoom(message.room)
    .then((c) => c.map((c) => c.connectionId));
  await publishMessage(ApiGatewayManagementApi, connectionIds, { action: 'message', message });
}

const onInitialiseConnection = async (ApiGatewayManagementApi: ApiGatewayManagementApi, connectionId: ConnectionId, message: DoInitialize) => {
  const messages = await getMessages(message.room);
  await sendAllRoomMessages(ApiGatewayManagementApi, connectionId, messages);
};

const onMessageReceived = async (ApiGatewayManagementApi: ApiGatewayManagementApi, message: PostNewMessage) => {
  const saved = await saveMessage(message);
  await sendMessageToRoom(ApiGatewayManagementApi, saved);
};

export const processMessage = async (ApiGatewayManagementApi: ApiGatewayManagementApi, connectionId: ConnectionId, body: IncomingSocketMessage) => {
  switch (body.action) {
    case 'init':
      await onInitialiseConnection(ApiGatewayManagementApi, connectionId, body);
      break;
    case 'message':
      await onMessageReceived(ApiGatewayManagementApi, body);
      break;
    default:
  }
};
