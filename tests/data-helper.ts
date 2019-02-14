import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { validateChatRoomMessageEntity, validateConnectionEntity, validateRoomEntity } from 'chat-types';
import envVariables from '../src/lib/env-variables';
import { dynamodb } from '../src/lib/lib-wrappers';

const entityValidators = {
  [envVariables.MessagesTable]: validateChatRoomMessageEntity,
  [envVariables.ConnectionsTable]: validateConnectionEntity,
  [envVariables.RoomsTable]: validateRoomEntity,
};

export const putItems = async (tableName: string, items: object[], validate: boolean = true) => {
  const req: DocumentClient.BatchWriteItemInput = {
    RequestItems: {
      [tableName]: items.map((i) => ({
        PutRequest: {
          Item: validate ? entityValidators[tableName](i) : i,
        },
      })),
    },
  };
  return dynamodb.batchWrite(req).promise();
};
export const deleteItems = async (tableName: string, key: string, ids: string[]) => {
  const req: DocumentClient.BatchWriteItemInput = {
    RequestItems: {
      [tableName]: ids.map((id: string) => ({
        DeleteRequest: {
          Key: { [key]: id },
        },
      })),
    },
  };
  return dynamodb.batchWrite(req).promise()
    .catch((e) => {
      console.warn(`Failed to delete test data (${key}=${ids}) from ${tableName}`);
    });
};
