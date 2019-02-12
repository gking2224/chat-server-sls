import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';
import { dynamodb } from './libs';
import { SavedMessage } from '../model/domain/message';
import { RoomName } from '../model/domain/room';

export default async (room: RoomName): Promise<SavedMessage[]> => {
  const req: DocumentClient.QueryInput = {
    TableName: EnvVariables.MessagesTable,
    IndexName: 'roomIdx',
    KeyConditionExpression: "room = :room",
    ExpressionAttributeValues: {
      ":room": room
    },
  };
  return await dynamodb.query(req).promise()
    .then((resp) => resp.Items || [])
    .then((rr) => rr.map((r) => r as SavedMessage));
};
