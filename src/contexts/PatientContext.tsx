import { createContext, ReactNode, Dispatch, useState, useEffect } from 'react';
import { api } from '../services/api';
import { PacienteType } from '../types';
import { toast } from 'react-toastify';

type PatientContextType = {
  patients: PacienteType[];
  selectedPatient: PacienteType | undefined;
  filteredPatients: PacienteType[];
  setSelectedPatient: Dispatch<PacienteType | undefined>;
  getPatients: (filter?: string) => Promise<void>;
  postPatient: (data: PacienteType) => Promise<void>;
  resetPatientsList: () => void;
  isFetching: boolean;
};

export const PatientContext = createContext({} as PatientContextType);

export function PatientProvider({ children }: { children: ReactNode }) {
  const [patients, setPatients] = useState<PacienteType[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<PacienteType[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<PacienteType | undefined>();
  const [reqErrors, setReqErrors] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function getPatients(filter?: string) {
    setIsFetching(true);

    if (filter) {
      await api
        .get(`paciente/?search=${filter}`)
        .then((response) => {
          setFilteredPatients(response.data.results);
        })
        .finally(() => setIsFetching(false));
    } else {
      await api
        .get(`paciente/`)
        .then((response) => {
          setPatients(response.data.results);
          setFilteredPatients(response.data.results);
        })
        .finally(() => setIsFetching(false));
    }
  }

  async function postPatient({
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

    console.log(patientToPost);

    await api
      .post('paciente/', patientToPost, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => toast.success('Cadastro realizado com sucesso'))
      .catch((error) => {
        console.log(error);
        if (error.response.status === 500) {
          toast.error('Erro interno do servidor, por favor, tente novamente');
        }
      })
      .finally(() => setIsFetching(false));
  }

  function resetPatientsList() {
    setFilteredPatients(patients);
  }

  return (
    <PatientContext.Provider
      value={{
        patients,
        selectedPatient,
        filteredPatients,
        setSelectedPatient,
        getPatients,
        postPatient,
        resetPatientsList,
        isFetching,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}
