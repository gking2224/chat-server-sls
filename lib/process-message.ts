import { Agma } from "../functions/websocket";

import saveMessage from './save-message';
import getMessages from './get-messages';

const sendMessages = async (agma: Agma, connectionId: string, messages) => {
  const sent = await agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify({ action: 'init', messages }),
  }).promise();
  return sent;
};

const sendMessageToRoom = async (agma, connectionId, message) =>
  agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify({ action: 'message', message }),
  }).promise();

const sendAllMessages = async (agma: Agma, connectionId: string, room: string) => {
  const messages = await getMessages(room);
  await sendMessages(agma, connectionId, messages);
};

const doSaveMessage = async (agma: Agma, connectionId: string, message) => {
  const saved = await saveMessage(message);
  await sendMessageToRoom(agma, connectionId, saved);
};

export const processMessage = async (agma: Agma, connectionId: string, body) => {
  switch (body.action) {
    case 'init':
      await sendAllMessages(agma, connectionId, body.room);
      break;
    case 'message':
      await doSaveMessage(agma, connectionId, body.message);
      break;
    default:
  }
};
