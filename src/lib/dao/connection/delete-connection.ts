import EnvVariables from '../../env-variables';

import { ConnectionId } from '@animando/chat-types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { dynamodb } from '../../lib-wrappers';

export default async (connectionId: ConnectionId) => {
  console.log('delete connection', connectionId);
  const req: DocumentClient.DeleteItemInput = {
    Key: ({
      connectionId,
    }),
    TableName: EnvVariables.ConnectionsTable,
  };
  return dynamodb.delete(req).promise()
    .then(() => console.log('deleted'));
};
