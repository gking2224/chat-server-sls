const getMessagesFn = require('../lib/get-messages');

module.exports.handler = async (event, context) => { // eslint-disable-line no-unused-vars
  try {
    const messages = await getMessagesFn();
    return {
      statusCode: 200,
      body: JSON.stringify({
        messages,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: e.message,
        error: e,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    };
  }
};
