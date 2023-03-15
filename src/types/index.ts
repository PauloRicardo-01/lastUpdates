export type OptionType = {
  id: number;
  text: string;
};

export type QuestionType = {
  id: number;
  title: string;
  type: 'String' | 'Int' | 'Float' | 'Boolean' | 'Select' | 'Date' | 'Radio' | 'Range';
  options?: OptionType[];
  association_answer?: string;
  metric?: string;
  line_width?: number;
  associated_question?: QuestionType;
  associated_question_block?: QuestionBlockType;
};

export type QuestionBlockType = {
  id: number;
  title: string;
  has_options: boolean;
  questions: QuestionType[];
};

export type QuestionsFormType = {
  id: number;
  title: string;
  questionBlocks: QuestionBlockType[];
};

export type FisioType = {
  matricula: string;
  nome: string;
  email: string;
  senha: string;
};

export type PacienteType = {
  matricula: string;
  nome: string;
  altura: number;
  peso: number;
  cpf: string;
  telefone: string;
  data_nascimento: string;
};

export type IntituicaoType = {
  cnpj: string;
  nome: string;
  email: string;
  senha: string;
};

export type ReqErrorsType = {
  matricula?: string[];
  nome?: string[];
  sobrenome?: string[];
};
