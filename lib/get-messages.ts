import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';
import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB.DocumentClient();

export default async (room: string) => { // eslint-disable-line no-unused-vars
  const req: DocumentClient.QueryInput = {
    TableName: EnvVariables.MessagesTable,
    IndexName: 'roomIdx',
    KeyConditionExpression: "room = :room",
    ExpressionAttributeValues: {
      ":room": room
    },
  };
  const resp = await dynamodb.query(req).promise();
  return resp.Items;
};