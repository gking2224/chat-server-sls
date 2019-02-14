import getConnectionsByRoom from '../../get-connections-by-room';

const weInvokeGetConnectionsByRoom = async (roomName: string) => getConnectionsByRoom(roomName);

export default ({
  weInvokeGetConnectionsByRoom,
});
