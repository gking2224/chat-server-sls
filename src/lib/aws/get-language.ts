import { Comprehend } from 'aws-sdk';
import { DetectDominantLanguageResponse, DominantLanguage, Float } from 'aws-sdk/clients/comprehend';

const comprehend = new Comprehend();

interface ScoredLanguage {
  Score: Float;
  LanguageCode: string;
}
const dominantLanguageReducer = (chosen: ScoredLanguage, lang: DominantLanguage): ScoredLanguage => {
  if (lang.Score !== undefined && lang.LanguageCode !== undefined && lang.Score > chosen.Score) {
    return lang as ScoredLanguage;
  }
  return chosen;
};
const pickLanguage = (res: DetectDominantLanguageResponse): string => {
  if (!res.Languages) return 'en';
  const start: ScoredLanguage = { LanguageCode: 'en', Score: 0 };
  const chosen: ScoredLanguage = res.Languages.reduce<ScoredLanguage>(dominantLanguageReducer, start);
  return chosen.LanguageCode;
};
const useDefaultOnError = (e: any) => {
  console.error(e);
  return 'en';
};

export default async (text: string) => {
  console.log(`Get Language: ${text}`);
  return comprehend.detectDominantLanguage({
    Text: text,
  }).promise()
    .then(pickLanguage)
    .catch(useDefaultOnError);
};
