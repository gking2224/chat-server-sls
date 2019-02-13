import createRoom from '../lib/create-room';
import { validateCreateRoomBody, CreateRoomBody } from '../model/api/room';
import { corsHeaders } from '../lib/cors';
export const handler = async (event: any = {}) => {
  try {
    if (!event.body) throw new Error('no event body');
    const body = validateCreateRoomBody(JSON.parse(event.body));
    const room = await createRoom(body.room);
    return {
      statusCode: 200,
      body: JSON.stringify(room),
      headers: {
        ...corsHeaders
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
        ...corsHeaders
      },
    };
  }
};
