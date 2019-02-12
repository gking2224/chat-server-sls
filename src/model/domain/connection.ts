export type ConnectionId = string;


export interface SavedConnection {
  readonly room: string;
  readonly connectionId: ConnectionId;
  readonly author: string;
}
