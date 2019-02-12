import { Author } from "./message";
import { RoomName } from "./room";

export type ConnectionId = string;


export interface SavedConnection {
  readonly room: RoomName;
  readonly connectionId: ConnectionId;
  readonly author: Author;
}
