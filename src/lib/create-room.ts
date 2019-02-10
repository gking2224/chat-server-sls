import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';
import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB.DocumentClient();

export default async (room: string) => {

  const Item: any = {
    room,
  };

  const req: DocumentClient.PutItemInput = {
    TableName: EnvVariables.RoomsTable,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
