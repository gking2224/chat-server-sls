'use strict';

module.exports.handler = async (event, context) => {

  const { eventType, connectionId, domainName, stage } = event.requestContext;

  switch (eventType) {
    case 'CONNECT':
      break;
    case 'MESSAGE':
      console.log('Process message:', JSON.parse(event.body));
      break;
    default:
      console.error(`Unknown eventType: ${eventType}`);
  }
  return {
    statusCode: 200,
  };
};
