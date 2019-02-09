import EnvVariables from './env-variables';

import { DocumentClient, } from 'aws-sdk/clients/dynamodb';
import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB.DocumentClient();

export default async (connectionId: string) => {
  console.log('delete connection', connectionId);
  const req: DocumentClient.DeleteItemInput = {
    Key: {
      connectionId,
    },
    TableName: EnvVariables.ConnectionsTable,
  };
  return dynamodb.delete(req).promise().then(() => console.log('deleted'));
};
