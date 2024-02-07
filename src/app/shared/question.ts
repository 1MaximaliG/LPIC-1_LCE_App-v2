interface antworten {
  option: string;
  istRichtig:boolean;
}
export interface Question {
  id:  string;
  frage: string;
  antworten?: antworten[];
  fillin?: string;
}

