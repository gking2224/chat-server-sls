import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';
import { dynamodb } from './libs';
import { SavedConnection } from '../model/domain/connection';

export default async (room: string): Promise<SavedConnection[]> => { // eslint-disable-line no-unused-vars
  const req: DocumentClient.QueryInput = {
    TableName: EnvVariables.ConnectionsTable,
    IndexName: 'roomIdx',
    KeyConditionExpression: "room = :room",
    ExpressionAttributeValues: {
      ":room": room
    },
  };
  return dynamodb.query(req).promise()
    .then((r) => r.Items)
    .then((items) => items || [])
    .then((items) => items.map((i: any) => (i as SavedConnection)));
};
