import { validateGetRoomsResponse } from 'chat-types';
import getRooms from '../lib/dao/room/get-rooms';
import { corsHeaders } from '../lib/utils/cors';

export const handler = async (event: any, context: any) => { // eslint-disable-line no-unused-vars
  try {
    const rooms = await getRooms();
    return {
      body: JSON.stringify(validateGetRoomsResponse({
        rooms,
      })),
      headers: {
        ...corsHeaders,
      },
      statusCode: 200,
    };
  } catch (e) {
    console.error(`Get rooms failed: ${e}`);
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
