import { DetectDominantLanguageResponse, DominantLanguage, Float } from 'aws-sdk/clients/comprehend';
import { Comprehend } from 'aws-sdk';

const comprehend = new Comprehend();

type Language = {
  Score: Float;
  LanguageCode: string;
}
const dominantLanguageReducer = (chosen: Language, lang: DominantLanguage): Language => {
  if (lang.Score !== undefined && lang.LanguageCode !== undefined && lang.Score > chosen.Score) {
    return lang as Language;
  }
  return chosen;
}
const pickLanguage = (res: DetectDominantLanguageResponse): string => {
  if (!res.Languages) return 'en';
  const start: Language = { LanguageCode: 'en', Score: 0 };
  const chosen: Language = res.Languages.reduce<Language>(dominantLanguageReducer, start);
  return chosen.LanguageCode;
}

module.exports = async (text: string) => comprehend.detectDominantLanguage({
  Text: text,
}).promise()
  .then(pickLanguage);
