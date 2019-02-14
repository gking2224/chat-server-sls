import EnvVariables from './env-variables';

import { dynamodb } from './libs';
import { ConnectionId, ConnectionEntity } from 'chat-types';

export default async (connectionId: ConnectionId, room: string, author: string) => {
  const Item: ConnectionEntity = {
    connectionId,
    room,
    author,
  };

  const req = {
    TableName: EnvVariables.ConnectionsTable,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
