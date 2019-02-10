import { handler as getRooms } from '../../get-rooms';

const we_invoke_get_rooms = async () => {

  const event = {};
  const context = {};
  const res = await getRooms(event, context);
  return res;

}

export default ({
  we_invoke_get_rooms
})
