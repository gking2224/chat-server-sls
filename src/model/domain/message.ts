
export interface PendingMessage {
  readonly room: string;
  readonly message: string;
  readonly author: string;

}

export interface SavedMessage extends PendingMessage {
  readonly language: string;
  readonly messageId: string;
  readonly translation?: string;
}
