import EnvVariables from './env-variables';

import { dynamodb } from './libs';
import { DeleteItemInput, Key } from 'aws-sdk/clients/dynamodb';

export default async (connectionId: string) => {
  console.log('delete connection', connectionId);
  const req: DeleteItemInput = {
    Key: ({
      connectionId
    }) as Key,
    TableName: EnvVariables.ConnectionsTable,
  };
  return dynamodb.delete(req).promise()
    .then(() => console.log('deleted'));
};
