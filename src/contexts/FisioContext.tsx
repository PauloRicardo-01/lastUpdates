import { createContext, ReactNode, Dispatch, useState, useEffect } from 'react';
import { api } from '../services/api';
import { PacienteType } from '../types';
import { toast } from 'react-toastify';

type FisioContextType = {
  fisios: PacienteType[];
  selectedFisio: PacienteType | undefined;
  filteredFisios: PacienteType[];
  setSelectedFisio: Dispatch<PacienteType | undefined>;
  getFisios: (filter?: string) => Promise<void>;
  postFisio: (data: PacienteType) => Promise<void>;
  resetFisiosList: () => void;
  isFetching: boolean;
};

export const FisioContext = createContext({} as FisioContextType);

export function FisioProvider({ children }: { children: ReactNode }) {
  const [fisios, setFisios] = useState<PacienteType[]>([]);
  const [filteredFisios, setFilteredFisios] = useState<PacienteType[]>([]);
  const [selectedFisio, setSelectedFisio] = useState<PacienteType | undefined>();
  const [reqErrors, setReqErrors] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function getFisios(filter?: string) {
    setIsFetching(true);

    if (filter) {
      await api
        .get(`fisioterapeuta/?search=${filter}`)
        .then((response) => {
          setFilteredFisios(response.data.results);
        })
        .finally(() => setIsFetching(false));
    } else {
      await api
        .get(`fisioterapeuta/`)
        .then((response) => {
          setFisios(response.data.results);
          setFilteredFisios(response.data.results);
        })
        .finally(() => setIsFetching(false));
    }
  }

  async function postFisio({
    matricula,
    nome,
    altura,
    peso,
    cpf,
    telefone,
    data_nascimento,
  }: PacienteType) {
    setIsFetching(true);

    const patientToPost: PacienteType = {
      matricula: matricula,
      nome: nome,
      altura: altura,
      peso: peso,
      cpf: cpf,
      telefone: telefone,
      data_nascimento: data_nascimento,
    };

    await api
      .post('fisioterapeuta/', patientToPost, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => toast.success('Cadastro realizado com sucesso'))
      .catch((error) => {
        if (error.response.status === 500) {
          toast.error('Erro interno do servidor, por favor, tente novamente');
        }
      })
      .finally(() => setIsFetching(false));
  }

  function resetFisiosList() {
    setFilteredFisios(fisios);
  }

  return (
    <FisioContext.Provider
      value={{
        fisios,
        selectedFisio,
        filteredFisios,
        setSelectedFisio,
        getFisios,
        postFisio,
        resetFisiosList,
        isFetching,
      }}
    >
      {children}
    </FisioContext.Provider>
  );
}
