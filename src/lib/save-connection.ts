import EnvVariables from './env-variables';

import { dynamodb } from './libs';
import { ConnectionId, RoomName, Author } from 'chat-types';

export default async (connectionId: ConnectionId, room: RoomName, author: Author) => {
  const Item = {
    connectionId,
    room,
    author,
  };

  const req = {
    TableName: EnvVariables.ConnectionsTable,
    Item,
  };
  return dynamodb.put(req).promise();
};
