const AWS = require('aws-sdk');

const saveConnection = require('../lib/save-connection');
const saveMessage = require('../lib/save-message');

const doSaveConnection = async (queryStringParameters, connectionId) => {
  console.log(queryStringParameters);
  const { room, author } = queryStringParameters;
  await saveConnection(connectionId, room, author);
};

const sendMessageToRoom = async (agma, connectionId, message) => {
  const sent = await agma.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify(message),
  }).promise();
  return sent;
};

const processMessage = async (agma, connectionId, message) => {
  console.log('Process message:', message);
  const saved = await saveMessage(message);
  console.log('Saved:', saved);
  const sendToRoomResult = await sendMessageToRoom(agma, connectionId, saved);
  console.log('Sent to room:', sendToRoomResult);
};
module.exports.handler = async (event) => {
  const {
    eventType,
    connectionId,
    domainName,
    stage,
  } = event.requestContext;
  const { queryStringParameters } = event;

  const agma = new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    endpoint: `${domainName}/${stage}`,
  });

  switch (eventType) {
    case 'CONNECT':
      await doSaveConnection(queryStringParameters, connectionId);
      break;
    case 'MESSAGE':
      await processMessage(agma, connectionId, JSON.parse(event.body));
      break;
    default:
      console.error(`Unknown eventType: ${eventType}`);
  }
  return {
    statusCode: 200,
  };
};
