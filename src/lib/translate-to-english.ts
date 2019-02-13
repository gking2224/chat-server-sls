import AWS = require('aws-sdk');
import { Translate } from 'aws-sdk';
import { MessageText, LanguageCode } from 'chat-types';

const translate = new AWS.Translate();

const getTranslatedText = (t: Translate.Types.TranslateTextResponse) => t.TranslatedText;

export default async (text: MessageText, language: LanguageCode) => {
  console.log(`Translated to english from ${language}: ${text}`);
  const params = {
    SourceLanguageCode: language,
    TargetLanguageCode: 'en',
    Text: text,
  };
  return translate.translateText(params).promise().then(getTranslatedText);
};
