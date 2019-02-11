import { BatchWriteItemInput, PutItemInputAttributeMap, Key } from "aws-sdk/clients/dynamodb";
import { dynamodb } from '../src/lib/libs';

export const putItems = async (tableName: string, items: object[]) => {
  const req: BatchWriteItemInput = {
    RequestItems: {
      [tableName]: items.map((Item: PutItemInputAttributeMap) => ({
        PutRequest: {
          Item
        }
      }))
    }
  }
  return dynamodb.batchWrite(req).promise();
}
export const deleteItems = async (tableName: string, key: string, ids: string[]) => {
  const req: BatchWriteItemInput = {
    RequestItems: {
      [tableName]: ids.map((id: string) => ({
        DeleteRequest: {
          Key: ({ [key]: id } as Key)
        }
      }))
    }
  };
  return dynamodb.batchWrite(req).promise()
    .catch((e) => {
      console.warn(`Failed to delete test data (${key}=${ids}) from ${tableName}`);
    })
}
