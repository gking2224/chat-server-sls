import envVariables from "./env-variables";
import generateRandomId from '../lib/generate-random-id';

import { dynamodb } from './libs';
import { PutItemInput } from "aws-sdk/clients/dynamodb";

const getLanguage = require('../lib/get-language');
const translateToEnglish = require('../lib/translate-to-english');

export default async ({ message, author, room }) => {
  const language = await getLanguage(message);

  const Item: any = {
    messageId: generateRandomId(),
    message,
    room,
    author,
    language,
  };

  if (language !== 'en') {
    Item.translation = await translateToEnglish(message, language);
  }
  const req: PutItemInput = {
    TableName: envVariables.MessagesTable,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
