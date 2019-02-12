import getMessages from "../../get-messages";
import getConnectionsByRoom from "../../get-connections-by-room";

const we_invoke_get_messages = async (room: string) => getMessages(room);
const we_invoke_get_connections_by_room = async (room: string) => getConnectionsByRoom(room);

export default ({
  we_invoke_get_messages,
  we_invoke_get_connections_by_room
})
