import { DetectDominantLanguageResponse, DominantLanguage, Float } from 'aws-sdk/clients/comprehend';
import { Comprehend } from 'aws-sdk';
import { LanguageCode, MessageText } from 'chat-types';

const comprehend = new Comprehend();

type ScoredLanguage = {
  Score: Float;
  LanguageCode: LanguageCode;
}
const dominantLanguageReducer = (chosen: ScoredLanguage, lang: DominantLanguage): ScoredLanguage => {
  if (lang.Score !== undefined && lang.LanguageCode !== undefined && lang.Score > chosen.Score) {
    return lang as ScoredLanguage;
  }
  return chosen;
}
const pickLanguage = (res: DetectDominantLanguageResponse): LanguageCode => {
  if (!res.Languages) return 'en';
  const start: ScoredLanguage = { LanguageCode: 'en', Score: 0 };
  const chosen: ScoredLanguage = res.Languages.reduce<ScoredLanguage>(dominantLanguageReducer, start);
  return chosen.LanguageCode;
}

export default async (text: MessageText) => {
  console.log(`Get Language: ${text}`);
  return comprehend.detectDominantLanguage({
    Text: text,
  }).promise()
    .then(pickLanguage);
}
