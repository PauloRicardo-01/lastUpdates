import { Dispatch, useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { PatientContext } from '../../contexts/PatientContext';
import { SearchBarContainer } from './styles';

type Props = {
  value: string;
  setValue: Dispatch<string>;
  action: (filter?: string) => void;
  width?: string;
};

export function SearchBar({ value, setValue, action, width }: Props) {
  const { resetPatientsList } = useContext(PatientContext);

  function handleChange(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;

    if (input.value === '') {
      resetPatientsList();
    }
    setValue(input.value);
  }

  return (
    <SearchBarContainer hasText={value !== ''} width={width}>
      <input
        type='text'
        placeholder='Nome ou Matrícula'
        onChange={(e) => handleChange(e as unknown as KeyboardEvent)}
      />
      <button disabled={value === ''} onClick={() => action()}>
        <BsSearch />
      </button>
    </SearchBarContainer>
  );
}
