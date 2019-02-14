import { dynamodb } from '../../lib-wrappers';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import envVariables from '../../env-variables';
import { validateRoomEntity } from 'chat-types';

export default async () => {
  const req: DocumentClient.ScanInput = {
    TableName: envVariables.RoomsTable,
    Limit: 100,
  };
  return dynamodb.scan(req).promise()
    .then((resp) => resp.Items ? resp.Items : [])
    .then((items: any[]) => items.map((r) => validateRoomEntity(r).room));
};
