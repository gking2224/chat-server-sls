import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { ConnectionEntity, validateConnectionEntity } from 'chat-types';
import EnvVariables from '../../env-variables';
import { dynamodb } from '../../lib-wrappers';
import { doFilterByTypeValidation } from '../../utils/type-filter';

export default async (roomName: string): Promise<ConnectionEntity[]> => {
  const req: DocumentClient.QueryInput = {
    ExpressionAttributeValues: {
      ':room': roomName,
    },
    IndexName: 'roomIdx',
    KeyConditionExpression: 'room = :room',
    TableName: EnvVariables.ConnectionsTable,
  };
  return dynamodb.query(req).promise()
    .then((r) => r.Items)
    .then((items) => items || [])
    .then(doFilterByTypeValidation<ConnectionEntity>(validateConnectionEntity));
};
