import envVariables from "./env-variables";
import generateRandomId from '../lib/generate-random-id';

import { dynamodb } from './libs';
import { DocumentClient } from "aws-sdk/clients/dynamodb";

import getLanguage from '../lib/get-language';
import translateToEnglish from '../lib/translate-to-english';
import { PostNewMessage, SavedMessage } from "chat-types";

export default async (event: PostNewMessage): Promise<SavedMessage> => {
  const { message } = event;
  const { message: text, room, author } = message;
  const language = await getLanguage(text);

  let Item: SavedMessage = {
    messageId: generateRandomId(),
    message: text,
    room,
    author,
    language,
  };

  if (language !== 'en') {
    const translation = await translateToEnglish(text, language);
    Item = { ...Item, translation };
  }
  const req: DocumentClient.PutItemInput = {
    TableName: envVariables.MessagesTable,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
