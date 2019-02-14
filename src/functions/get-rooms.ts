import getRooms from '../lib/dao/room/get-rooms';
import { corsHeaders } from '../lib/utils/cors';
import { validateGetRoomsResponse } from 'chat-types';

export const handler = async (event: any, context: any) => { // eslint-disable-line no-unused-vars
  try {
    const rooms = await getRooms();
    return {
      statusCode: 200,
      body: JSON.stringify(validateGetRoomsResponse({
        rooms
      })),
      headers: {
        ...corsHeaders
      },
    };
  } catch (e) {
    console.error(`Get rooms failed: ${e}`);
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
