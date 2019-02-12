import { PendingMessage, SavedMessage } from "../domain/message";

export interface DoInitialize {
  readonly action: 'init';
  readonly room: string;
}
export interface PostNewMessage {
  readonly action: 'message';
  readonly message: PendingMessage;
}
export type IncomingSocketMessage = DoInitialize | PostNewMessage;

export interface InitializeResponse {
  readonly action: 'init';
  readonly messages: SavedMessage[];
}

export interface PublishMessage {
  readonly action: 'message';
  readonly message: SavedMessage;
}

export type OutgoingSocketMessage = InitializeResponse | PublishMessage;
