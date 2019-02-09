import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';
import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB.DocumentClient();

export default async () => { // eslint-disable-line no-unused-vars
  const req: DocumentClient.ScanInput = {
    TableName: EnvVariables.MessagesTable,
    Limit: 100,
  };
  const rooms = await dynamodb.scan(req).promise()
    .then((resp) => resp.Items ? resp.Items : [])
    .then((items) => {
      return items.reduce<string[]>(
        (rr, m) => rr.indexOf(m.room) !== -1 ? rr : [...rr, m.room], [] as string[]);
    });
  return rooms;
};
