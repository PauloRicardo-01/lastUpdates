export const nameRegex =
  /^(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+(?:\-(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+)*(?: (?:(?:e|y|de(?:(?: la| las| lo| los))?|do|dos|da|das|del|van|von|bin|le) )?(?:(?:(?:d'|D'|O'|Mc|Mac|al\-))?(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+|(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+(?:\-(?:[\p{Lu}&&[\p{IsLatin}]])(?:(?:')?(?:[\p{Ll}&&[\p{IsLatin}]]))+)*))+(?: (?:Jr\.|II|III|IV))?$/;

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const letterRegex = /[a-zA-Z\u00C0-\u00FF ']+$/;

export const maskLetter = (value: string): string => {
  const beforeLastCharacter = value.substring(value.length - 2, value.length - 1);
  const lastCharacter = value.substring(value.length - 1, value.length);
  const twoBlanks = beforeLastCharacter === lastCharacter ? lastCharacter === ' ' : false;

  if (!letterRegex.test(value) || twoBlanks) {
    return value.substring(0, value.length - 1);
  }

  return value.trimStart();
};

export const maskNumber = (value: string): string => {
  return value.replace(/\D/g, '');
};

export const maskCPF = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const maskCNPJ = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const maskPercent = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '% $1.$2')
    .replace(/(\d{2})\d+?$/, '$1');
};

export const maskDate = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1');
};

export const maskInteger = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1})(\d{13})\d+?$/, '$1.$2')
    .replace(/(\d{1})(\d{12})\d+?$/, '$1.$2')
    .replace(/(\d{1})(\d{9})$/, '$1.$2')
    .replace(/(\d{1})(\d{6})$/, '$1.$2')
    .replace(/(\d{1})(\d{3})$/, '$1.$2');
};

export const maskFloat = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1})(\d{15})\d+?$/, '$1.$2')
    .replace(/(\d{1})(\d{14})\d+?$/, '$1.$2')
    .replace(/(\d{1})(\d{11})$/, '$1.$2')
    .replace(/(\d{1})(\d{8})$/, '$1.$2')
    .replace(/(\d{1})(\d{5})$/, '$1.$2')
    .replace(/(\d{1})(\d{1,2})$/, '$1,$2');
};

export const maskPhone = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};
