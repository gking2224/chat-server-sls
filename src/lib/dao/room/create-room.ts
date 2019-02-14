import EnvVariables from '../../env-variables';

import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { RoomEntity } from 'chat-types';
import { dynamodb } from '../../lib-wrappers';

export default async (roomName: string): Promise<RoomEntity> => {

  const Item: RoomEntity = {
    room: roomName,
  };

  const req: DocumentClient.PutItemInput = {
    Item,
    TableName: EnvVariables.RoomsTable,
  };
  await dynamodb.put(req).promise();
  return Item;
};
