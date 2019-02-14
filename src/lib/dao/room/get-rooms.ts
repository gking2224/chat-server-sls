import { validateRoomEntity } from '@animando/chat-types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import envVariables from '../../env-variables';
import { dynamodb } from '../../lib-wrappers';

export default async () => {
  const req: DocumentClient.ScanInput = {
    Limit: 100,
    TableName: envVariables.RoomsTable,
  };
  return dynamodb.scan(req).promise()
    .then((resp) => resp.Items ? resp.Items : [])
    .then((items: any[]) => items.map((r) => validateRoomEntity(r).room));
};
