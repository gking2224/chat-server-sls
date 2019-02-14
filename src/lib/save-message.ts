import envVariables from "./env-variables";
import generateRandomId from '../lib/generate-random-id';

import { dynamodb } from './libs';
import { DocumentClient } from "aws-sdk/clients/dynamodb";

import getLanguage from '../lib/get-language';
import translateToEnglish from '../lib/translate-to-english';
import { ChatRoomMessageEntity, PublishNewMessage } from "chat-types";

export default async (event: PublishNewMessage): Promise<ChatRoomMessageEntity> => {
  const { message } = event;
  const { message: text, room, author } = message;
  const language = await getLanguage(text);

  const Item: ChatRoomMessageEntity = {
    message: text,
    room,
    author,
    messageId: generateRandomId(),
    language,
    translation: null
  };

  if (language !== 'en') {
    const translation = await translateToEnglish(text, language);
    Item.translation = translation;
  }
  const req: DocumentClient.PutItemInput = {
    TableName: envVariables.MessagesTable,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
