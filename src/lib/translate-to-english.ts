import AWS = require('aws-sdk');
import { Translate } from 'aws-sdk';

const translate = new AWS.Translate();

const getTranslatedText = (t: Translate.Types.TranslateTextResponse) => t.TranslatedText;

export default async (text: string, language: string) => {
  console.log(`Translated to english from ${language}: ${text}`);
  const params = {
    SourceLanguageCode: language,
    TargetLanguageCode: 'en',
    Text: text,
  };
  return translate.translateText(params).promise().then(getTranslatedText);
};
