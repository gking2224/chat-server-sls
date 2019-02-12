import EnvVariables from './env-variables';

import { dynamodb } from './libs';
import { ConnectionId } from '../model/domain/connection';
import { Author } from '../model/domain/message';
import { RoomName } from '../model/domain/room';

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
