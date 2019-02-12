import { RoomName } from "./room";

export type Author = string;
export type LanguageCode = string;
export type MessageText = string;
export type MessageId = string;


export interface PendingMessage {
  readonly room: RoomName;
  readonly message: MessageText;
  readonly author: Author;
}

export interface SavedMessage extends PendingMessage {
  readonly language: LanguageCode;
  readonly messageId: MessageId;
  readonly translation?: MessageText;
}
