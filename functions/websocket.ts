import AWS = require('aws-sdk');

import saveConnection from '../lib/save-connection';
import saveMessage from '../lib/save-message';
import getMessages from '../lib/get-messages';

const sendMessageToRoom = async (agma, connectionId, message) =>
  agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify({ action: 'message', message }),
  }).promise();

const sendError = async (agma, connectionId, error) =>
  agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify({ error }),
  }).promise();

const sendMessages = async (agma, connectionId, messages) => {
  const sent = await agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify({ action: 'init', messages }),
  }).promise();
  return sent;
};

const initConnection = async (agma, connectionId, room, author) => saveConnection(connectionId, room, author);

const sendAllMessages = async (agma, connectionId, room) => {
  const messages = await getMessages(room);
  await sendMessages(agma, connectionId, messages);
};

const doSaveMessage = async (agma, connectionId, message) => {
  const saved = await saveMessage(message);
  await sendMessageToRoom(agma, connectionId, saved);
};

const processMessage = async (agma, connectionId, body) => {
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
export const handler = async (event: any) => {
  const {
    eventType,
    connectionId,
    domainName,
    stage,
  } = event.requestContext;
  const { queryStringParameters } = event;
  const { room, author } = (queryStringParameters || {}) as any;

  const agma = new AWS.ApiGatewayManagementApi({
    endpoint: `${domainName}/${stage}`,
  });
  try {
    switch (eventType) {
      case 'CONNECT':
        await initConnection(agma, connectionId, room, author);
        break;
      case 'MESSAGE':
        await processMessage(agma, connectionId, JSON.parse(event.body));
        break;
      default:
        console.error(`Unknown eventType: ${eventType}`);
    }
  } catch (e) {
    sendError(agma, connectionId, e);
  }

  console.log('Finishing');
  return {
    statusCode: 200,
  };
};
