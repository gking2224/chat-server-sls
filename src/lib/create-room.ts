import EnvVariables from './env-variables';

import { dynamodb } from '../lib/libs';
import { RoomName, RoomEntity } from '../model/domain/room';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export default async (room: RoomName): Promise<RoomEntity> => {

  const Item: RoomEntity = {
    room,
  };

  const req: DocumentClient.PutItemInput = {
    TableName: EnvVariables.RoomsTable,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
