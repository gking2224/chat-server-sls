import getConnectionsByRoom from "../../get-connections-by-room";

const we_invoke_get_connections_by_room = async (roomName: string) => getConnectionsByRoom(roomName);

export default ({
  we_invoke_get_connections_by_room
})
