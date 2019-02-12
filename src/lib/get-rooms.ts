import { dynamodb } from './libs';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import envVariables from './env-variables';

export default async () => {
  const req: DocumentClient.ScanInput = {
    TableName: envVariables.RoomsTable,
    Limit: 100,
  };
  const rooms = await dynamodb.scan(req).promise()
    .then((resp) => resp.Items ? resp.Items : [])
    .then((items: any[]) => items.map((r) => r.room as string));
  return rooms;
};
