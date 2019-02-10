import createRoom from '../lib/create-room';

const validateRoom = (body: any): void => {
  return
}

module.exports.handler = async (event: any, context: any) => { // eslint-disable-line no-unused-vars
  try {
    const body = JSON.parse(event.body);
    validateRoom(body);
    const rooms = await createRoom(body.room);
    return {
      statusCode: 200,
      body: JSON.stringify({
        rooms
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
