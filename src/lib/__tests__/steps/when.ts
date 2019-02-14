import getMessages from "../../dao/message/get-messages";
import getConnectionsByRoom from "../../dao/connection/get-connections-by-room";

const we_invoke_get_messages = async (roomName: string) => getMessages(roomName);
const we_invoke_get_connections_by_room = async (roomName: string) => getConnectionsByRoom(roomName);

export default ({
  we_invoke_get_messages,
  we_invoke_get_connections_by_room
})
