import { PutItemInput } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';

import { dynamodb } from '../lib/libs';

export default async (room: string) => {

  const Item: any = {
    room,
  };

  const req: PutItemInput = {
    TableName: EnvVariables.RoomsTable,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
