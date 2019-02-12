import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { dynamodb } from '../src/lib/libs';

export const putItems = async (tableName: string, items: object[]) => {
  const req: DocumentClient.BatchWriteItemInput = {
    RequestItems: {
      [tableName]: items.map((Item) => ({
        PutRequest: {
          Item
        }
      }))
    }
  }
  return dynamodb.batchWrite(req).promise();
}
export const deleteItems = async (tableName: string, key: string, ids: string[]) => {
  const req: DocumentClient.BatchWriteItemInput = {
    RequestItems: {
      [tableName]: ids.map((id: string) => ({
        DeleteRequest: {
          Key: { [key]: id }
        }
      }))
    }
  };
  return dynamodb.batchWrite(req).promise()
    .catch((e) => {
      console.warn(`Failed to delete test data (${key}=${ids}) from ${tableName}`);
    })
}
