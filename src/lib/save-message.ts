import envVariables from "./env-variables";
import generateRandomId from '../lib/generate-random-id';

import AWS = require('aws-sdk');
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const dynamodb = new AWS.DynamoDB.DocumentClient();
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
  const req: DocumentClient.PutItemInput = {
    TableName: envVariables.MessagesTable,
    Item,
  };
  await dynamodb.put(req).promise();
  return Item;
};
