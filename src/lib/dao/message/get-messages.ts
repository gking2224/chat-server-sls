import { ChatRoomMessageEntity, validateChatRoomMessageEntity } from '@animando/chat-types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import EnvVariables from '../../env-variables';
import { dynamodb } from '../../lib-wrappers';
import { doFilterByTypeValidation } from '../../utils/type-filter';

const addDefaultTimestamp = (e: any) => {
  if (e && e.timestamp === undefined) {
    return {
      ...e,
      timestamp: -1,
    };
  }
  return e;
};

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
    .then((items) => items.map(addDefaultTimestamp))
    .then(doFilterByTypeValidation<ChatRoomMessageEntity>(validateChatRoomMessageEntity));
};
