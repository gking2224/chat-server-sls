import EnvVariables from './env-variables';
import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB.DocumentClient();

export default async (connectionId: string, room: string, author: string) => {
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
