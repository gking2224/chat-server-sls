import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from './env-variables';
import { dynamodb } from './libs';
import { ChatRoomMessageEntity, validateChatRoomMessageEntity, } from 'chat-types';
import { doFilterByTypeValidation } from './utils/type-filter';

export default async (roomName: string): Promise<ChatRoomMessageEntity[]> => {
  const req: DocumentClient.QueryInput = {
    TableName: EnvVariables.MessagesTable,
    IndexName: 'roomIdx',
    KeyConditionExpression: "room = :room",
    ExpressionAttributeValues: {
      ":room": roomName
    },
  };
  return await dynamodb.query(req).promise()
    .then((resp) => resp.Items || [])
    .then(doFilterByTypeValidation<ChatRoomMessageEntity>(validateChatRoomMessageEntity));
};
