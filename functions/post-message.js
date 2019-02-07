const saveMessage = require('../lib/save-message');

const validatePayload = (body) => {
  if (!body) throw new Error('payload is missing');
  if (typeof body !== 'string') throw new Error('body is not a string');
  const parsed = JSON.parse(body);
  if (typeof parsed !== 'object') throw new Error('body is not an object');
  if (parsed.message === undefined) throw new Error('body is missing \'message\' attribute');
  return parsed;
};

module.exports.handler = async (event) => {
  try {
    const { message } = validatePayload(event.body);
    const resp = await saveMessage({ message });
    return {
      statusCode: 200,
      body: JSON.stringify(resp),
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
