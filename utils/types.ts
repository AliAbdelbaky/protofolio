export type Data<T = any> = Record<string, T>

export interface IPagination {
  total: number
  count: number
  per_page: number
  next_page_url: string
  prev_page_url: string
  current_page: number
  total_pages: number
}


export interface IPaginated<T> {
  items: T[]
  paginate: IPagination
}

export interface ILocale {
  ar: string
  en: string
}

export interface IQuestionAttributes {
  max_answers: number
  min_answers: number
  value: {
    min: number
    max: number
  }
  choices: []
}

export interface IQuestion {
  id: number;
  question_id: number;
  question: ILocale;
  type: string;
  options?: any;
  attributes: IQuestionAttributes;
}

export interface IClientAnswerFile {
  id: number
  name: string
  url: string
}

export interface IClientAnswer {
  id: number;
  question: IQuestion;
  type: string;
  answer: any[];
  files: IClientAnswerFile[];
  answered: boolean;
  updated_at: string;
  created_at: string;
}

export interface IClientAssessment {
  id: string;
  created_at: string;
  submitted_at: string;
  status: 'submitted' | 'pending' | 'processed';
  assessment?: IAssessment
  answers?: IClientAnswer[]
}

export interface IAssessment {
  id: number;
  key: string;
  name: ILocale
  questions?: IQuestion[];
  client_assessments?: IClientAssessment[];
}