import envVariables from '../../env-variables';
import generateRandomId from '../../utils/generate-random-id';

import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { dynamodb } from '../../lib-wrappers';

import { ChatRoomMessageEntity, PublishNewMessage } from '@animando/chat-types';
import getLanguage from '../../aws/get-language';
import translateToEnglish from '../../aws/translate-to-english';

export default async (event: PublishNewMessage): Promise<ChatRoomMessageEntity> => {
  const { message } = event;
  const { message: text, room, author } = message;
  const language = await getLanguage(text);

  const Item: ChatRoomMessageEntity = {
    author,
    language,
    message: text,
    messageId: generateRandomId(),
    room,
    translation: null,
  };

  if (language !== 'en') {
    const translation = await translateToEnglish(text, language);
    Item.translation = translation;
  }
  const req: DocumentClient.PutItemInput = {
    Item,
    TableName: envVariables.MessagesTable,
  };
  await dynamodb.put(req).promise();
  return Item;
};
