import { CreateRoomBody, validateCreateRoomBody, validateCreateRoomResponse } from '@animando/chat-types';
import createRoom from '../lib/dao/room/create-room';
import { corsHeaders } from '../lib/utils/cors';

export const handler = async (event: any = {}) => {
  try {
    if (!event.body) throw new Error('no event body');
    const body: CreateRoomBody = validateCreateRoomBody(event.body);
    const response = await createRoom(body.roomName);
    return {
      body: JSON.stringify(validateCreateRoomResponse({ roomName: response.room })),
      headers: {
        ...corsHeaders,
      },
      statusCode: 200,
    };
  } catch (e) {
    return {
      body: JSON.stringify({
        error: e,
        message: e.message,
      }),
      headers: {
        ...corsHeaders,
      },
      statusCode: 500,
    };
  }
};
