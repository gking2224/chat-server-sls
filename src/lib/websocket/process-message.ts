import {
  ChatRoomMessageEntity, ConnectionId, PublishNewMessage, RequestInitRoom, WebsocketMessageRequest
} from '@animando/chat-types';
import { ApiGatewayManagementApi } from 'aws-sdk';
import getConnectionsByRoom from '../dao/connection/get-connections-by-room';
import getMessages from '../dao/message/get-messages';
import saveMessage from '../dao/message/save-message';
import { publishMessage } from './publish-to-websocket';

const sendAllRoomMessages = async (
  agma: ApiGatewayManagementApi, connectionId: ConnectionId, messages: ChatRoomMessageEntity[]) => {
  await publishMessage(agma, connectionId, { action: 'init', messages });
};

const sendMessageToRoom = async (agma: ApiGatewayManagementApi, message: ChatRoomMessageEntity) => {
  const connectionIds = await getConnectionsByRoom(message.room)
    .then((cc) => cc.map((c) => c.connectionId));
  await publishMessage(agma, connectionIds, { action: 'message', message });
};

const onInitialiseConnection = async (
  agma: ApiGatewayManagementApi, connectionId: ConnectionId, message: RequestInitRoom,
) => {
  const messages = await getMessages(message.roomName);
  await sendAllRoomMessages(agma, connectionId, messages);
};

const onMessageReceived = async (agma: ApiGatewayManagementApi, message: PublishNewMessage) => {
  const saved = await saveMessage(message);
  await sendMessageToRoom(agma, saved);
};

export const processMessage = async (
  agma: ApiGatewayManagementApi, connectionId: ConnectionId, body: WebsocketMessageRequest,
) => {
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
