import EnvVariables from './env-variables';

import { dynamodb } from './libs';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { ConnectionId } from 'chat-types';

export default async (connectionId: ConnectionId) => {
  console.log('delete connection', connectionId);
  const req: DocumentClient.DeleteItemInput = {
    Key: ({
      connectionId
    }),
    TableName: EnvVariables.ConnectionsTable,
  };
  return dynamodb.delete(req).promise()
    .then(() => console.log('deleted'));
};
