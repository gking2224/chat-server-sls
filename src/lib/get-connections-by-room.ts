import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';
import { dynamodb } from './libs';
import { ConnectionEntity, validateConnectionEntity } from 'chat-types';

export default async (roomName: string): Promise<ConnectionEntity[]> => {
  const req: DocumentClient.QueryInput = {
    TableName: EnvVariables.ConnectionsTable,
    IndexName: 'roomIdx',
    KeyConditionExpression: "room = :room",
    ExpressionAttributeValues: {
      ":room": roomName
    },
  };
  return dynamodb.query(req).promise()
    .then((r) => r.Items)
    .then((items) => items || [])
    .then((items) => items.map((i: any) => validateConnectionEntity(i)));
};
