import { handler as getRooms } from '../../get-rooms';
import { handler as createRoom } from '../../create-room';

const we_invoke_get_rooms = async (event: any, context: any) => {
  const res = await getRooms(event, context);
  return res;
}
const we_invoke_create_room = async (event: any) => {
  const res = await createRoom(event);
  return res;
}

export default ({
  we_invoke_get_rooms,
  we_invoke_create_room
})
