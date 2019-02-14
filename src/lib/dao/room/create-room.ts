import EnvVariables from '../../env-variables';

import { dynamodb } from '../../lib-wrappers';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { RoomEntity } from 'chat-types';

export default async (roomName: string): Promise<RoomEntity> => {

  const Item: RoomEntity = {
    room: roomName,
  };

  const req: DocumentClient.PutItemInput = {
    TableName: EnvVariables.RoomsTable,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
