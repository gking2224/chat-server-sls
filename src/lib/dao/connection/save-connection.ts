import EnvVariables from '../../env-variables';

import { ConnectionEntity, ConnectionId } from '@animando/chat-types';
import { dynamodb } from '../../lib-wrappers';

export default async (connectionId: ConnectionId, room: string, author: string) => {
  const Item: ConnectionEntity = {
    author,
    connectionId,
    room,
  };

  const req = {
    Item,
    TableName: EnvVariables.ConnectionsTable,
  };
  await dynamodb.put(req).promise();
  return Item;
};
