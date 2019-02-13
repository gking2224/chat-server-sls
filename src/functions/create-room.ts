import createRoom from '../lib/create-room';

import { validateCreateRoomBody } from 'chat-types';

export const handler = async (event: any = {}) => {
  try {
    if (!event.body) throw new Error('no event body');
    const body = validateCreateRoomBody(JSON.parse(event.body));
    const room = await createRoom(body.room);
    return {
      statusCode: 200,
      body: JSON.stringify(room),
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
