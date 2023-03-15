import {
  InputContainer,
  RadioContainer,
  RadioInputContainer,
  RangeContainer,
  SwitchInputContainer,
  TextContainer,
} from './styles';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Dispatch, useEffect, useRef, useState } from 'react';
import { QuestionType } from '../../types';
import { maskCNPJ, maskCPF, maskDate, maskFloat, maskLetter, maskNumber, maskPhone } from './utils';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

type InputProps = {
  id: string;
  label: string;
  type?: 'text' | 'password';
  fullBorder?: boolean;
  width?: string;
  icon?: any;
  mask?: string;
  parseErrors?: boolean;
  value: string;
  setValue: Dispatch<string>;
  onChange?: () => void;
};

export function Input({
  id,
  label,
  type,
  fullBorder,
  width,
  icon,
  mask,
  parseErrors,
  value,
  setValue,
  onChange,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [float, setFloat] = useState(false);

  function handleWrite() {
    const input = inputRef.current!;

    switch (mask) {
      case 'letter':
        setValue(maskLetter(input.value));
        break;

      case 'number':
        setValue(maskNumber(input.value));
        break;

      case 'cnpj':
        setValue(maskCNPJ(input.value));
        break;

      case 'date':
        setValue(maskDate(input.value));
        break;

      case 'phone':
        setValue(maskPhone(input.value));
        break;

      case 'cpf':
        setValue(maskCPF(input.value));
        break;

      case 'float':
        setValue(maskFloat(input.value));
        break;

      default:
        setValue(input.value);
    }
  }

  function handleBlur() {
    const inputValue = inputRef.current!.value;

    if (inputValue === '') setFloat(false);
  }

  useEffect(() => {
    const input = inputRef.current;

    if (input?.value !== '') {
      setFloat(true);
    }
  }, [value]);

  return (
    <InputContainer
      float={float}
      isPassword={type === 'password'}
      visiblePassword={visiblePassword}
      fullBorder={fullBorder}
      width={width}
    >
      <div>{icon ?? ''}</div>
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        id={id}
        type={type === 'password' ? (visiblePassword ? 'text' : 'password') : 'text'}
        value={value}
        onFocus={() => setFloat(true)}
        onBlur={() => handleBlur()}
        onChange={() => {
          handleWrite();

          if (onChange) {
            onChange();
          }
        }}
      />
      {type === 'password' && (
        <button type='button' onClick={() => setVisiblePassword(!visiblePassword)}>
          {visiblePassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </InputContainer>
  );
}

type TextInputProps = {
  question: QuestionType;
};

export function TextInput({ question }: TextInputProps) {
  function handleWrite(e: KeyboardEvent) {
    console.log(e.target);
  }

  return (
    <TextContainer>
      <input type='text' onChange={(e) => handleWrite(e as unknown as KeyboardEvent)} />
    </TextContainer>
  );
}

type RadioInputProps = {
  question: QuestionType;
};

export function RadioInput({ question }: RadioInputProps) {
  return (
    <RadioInputContainer>
      {question.title}
      {question.options?.map((option) => {
        return (
          <RadioContainer key={Math.random()}>
            <input id={option.id.toString()} type='radio' name={question.title} />
            <label htmlFor={option.id.toString()}>{option.text}</label>
          </RadioContainer>
        );
      })}
    </RadioInputContainer>
  );
}

type RangeInputProps = {
  question: QuestionType;
};

export function RangeInput({ question }: RangeInputProps) {
  const rangeRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(question.options!.length - 1);

  function handleChange() {
    const rangeValue = Number(rangeRef.current?.value);

    setSelectedIndex(rangeValue);
  }

  return (
    <RangeContainer>
      {question.title}
      <input
        ref={rangeRef}
        id={question.id.toString()}
        type='range'
        min={0}
        max={question.options!.length - 1}
        name={question.title}
        onChange={() => handleChange()}
      />
      <label>{question.options![selectedIndex].text}</label>
    </RangeContainer>
  );
}

type SwitchInputProps = {
  selectedValue: any;
  setSelection: Dispatch<any>;
  options: string[];
};

export function SwitchInput({ selectedValue, setSelection, options }: SwitchInputProps) {
  const [optionsVisible, setOptionsVisible] = useState(false);

  function handleSelect(option: string) {
    setOptionsVisible(false);
    setSelection(option);
  }

  return (
    <SwitchInputContainer optionsVisible={optionsVisible}>
      <button className='title' onClick={() => setOptionsVisible(!optionsVisible)}>
        {selectedValue}
        {optionsVisible ? <AiOutlineUp /> : <AiOutlineDown />}
      </button>
      <div>
        {options.map((option, i) => {
          return (
            <button key={`option-${i}`} className='option' onClick={() => handleSelect(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </SwitchInputContainer>
  );
}
