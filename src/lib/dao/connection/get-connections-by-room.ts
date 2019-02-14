import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from '../../env-variables';
import { dynamodb } from '../../lib-wrappers';
import { ConnectionEntity, validateConnectionEntity } from 'chat-types';
import { doFilterByTypeValidation } from '../../utils/type-filter';

export default async (roomName: string): Promise<ConnectionEntity[]> => {
  const req: DocumentClient.QueryInput = {
    TableName: EnvVariables.ConnectionsTable,
    IndexName: 'roomIdx',
    KeyConditionExpression: "room = :room",
    ExpressionAttributeValues: {
      ":room": roomName
    },
  };
  return dynamodb.query(req).promise()
    .then((r) => r.Items)
    .then((items) => items || [])
    .then(doFilterByTypeValidation<ConnectionEntity>(validateConnectionEntity));
};
