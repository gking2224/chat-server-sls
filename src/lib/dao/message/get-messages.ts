import { ChatRoomMessageEntity, validateChatRoomMessageEntity } from '@animando/chat-types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from '../../env-variables';
import { dynamodb } from '../../lib-wrappers';
import { doFilterByTypeValidation } from '../../utils/type-filter';

export default async (roomName: string): Promise<ChatRoomMessageEntity[]> => {
  const req: DocumentClient.QueryInput = {
    ExpressionAttributeValues: {
      ':room': roomName,
    },
    IndexName: 'roomIdx',
    KeyConditionExpression: 'room = :room',
    TableName: EnvVariables.MessagesTable,
  };
  return dynamodb.query(req).promise()
    .then((resp) => resp.Items || [])
    .then(doFilterByTypeValidation<ChatRoomMessageEntity>(validateChatRoomMessageEntity));
};
