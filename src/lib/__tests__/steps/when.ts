import getMessages from "../../get-messages";
import getConnectionsByRoom from "../../get-connections-by-room";
import { RoomName } from "chat-types";

const we_invoke_get_messages = async (room: RoomName) => getMessages(room);
const we_invoke_get_connections_by_room = async (room: RoomName) => getConnectionsByRoom(room);

export default ({
  we_invoke_get_messages,
  we_invoke_get_connections_by_room
})
