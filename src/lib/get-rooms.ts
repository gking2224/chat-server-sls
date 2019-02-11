import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';
import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB.DocumentClient({
  service: new DynamoDB({
    endpoint: EnvVariables.DynamoDbEndpoint
  })
});

export default async () => {
  console.log('getRooms', EnvVariables.DynamoDbEndpoint, EnvVariables.RoomsTable);
  const req: DocumentClient.ScanInput = {
    TableName: EnvVariables.RoomsTable,
    Limit: 100,
  };
  const rooms = await dynamodb.scan(req).promise()
    .then((resp) => resp.Items ? resp.Items : [])
    .then((items: any[]) => items.map((r) => r.room as string));
  return rooms;
};
