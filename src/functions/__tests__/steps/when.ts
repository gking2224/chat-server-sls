import { handler as createRoom } from '../../create-room';
import { handler as getRooms } from '../../get-rooms';

const weInvokeGetRooms = async (event: any, context: any) => {
  const res = await getRooms(event, context);
  return res;
};
const weInvokeCreateRoom = async (event: any) => {
  const res = await createRoom(event);
  return res;
};

export default ({
  weInvokeCreateRoom,
  weInvokeGetRooms,
});
