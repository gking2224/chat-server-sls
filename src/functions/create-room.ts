import createRoom from '../lib/create-room';
import { corsHeaders } from '../lib/cors';
import { validateCreateRoomBody, validateCreateRoomResponse, CreateRoomBody } from 'chat-types';

export const handler = async (event: any = {}) => {
  try {
    if (!event.body) throw new Error('no event body');
    const body: CreateRoomBody = validateCreateRoomBody(event.body);
    const response = await createRoom(body.roomName);
    return {
      statusCode: 200,
      body: JSON.stringify(validateCreateRoomResponse({ roomName: response.room })),
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
