import getRooms from '../lib/get-rooms';

module.exports.handler = async (event: any, context: any) => { // eslint-disable-line no-unused-vars
  try {
    const rooms = await getRooms();
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
