import { useContext, useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md';
import { VscGraph } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { FisioContext } from '../../contexts/FisioContext';
import { PatientContext } from '../../contexts/PatientContext';
import { FisioType, PacienteType } from '../../types';
import { Loading } from '../Loading';
import { SearchBar } from '../SearchBar';
import { ListGeneratorBody, ListGeneratorFullContainer, ListGeneratorHeader } from './styles';

type Props = {
  data?: PacienteType[] | FisioType[];
  btnLabel?: string;
  justEdit?: boolean;
  isFetching?: boolean;
};

export function ListGenerator({ data, btnLabel, justEdit, isFetching }: Props) {
  const navigate = useNavigate();
  const { getPatients } = useContext(PatientContext);
  const { getFisios } = useContext(FisioContext);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log(typeof data);
  }, []);

  return (
    <ListGeneratorFullContainer>
      <ListGeneratorHeader>
        <button
          className='add-button'
          onClick={() => {
            if (justEdit) {
              navigate('/registro/paciente');
            } else {
              navigate('/registro/fisioterapeuta');
            }
          }}
        >
          {btnLabel} <AiOutlinePlusCircle />
        </button>
        <SearchBar
          width='400px'
          value={searchText}
          setValue={setSearchText}
          action={() => {
            if (justEdit) {
              getPatients(searchText);
            } else {
              getFisios(searchText);
            }
          }}
        />
      </ListGeneratorHeader>
      <ListGeneratorBody>
        {isFetching && <Loading />}
        {!isFetching &&
          data?.map((data) => {
            return (
              <li key={data.matricula}>
                <span>{data.nome}</span>
                <span>{data.matricula}</span>
                <div>
                  {justEdit && (
                    <>
                      <button>
                        <FaWpforms />
                      </button>
                      <button>
                        <VscGraph />
                      </button>
                    </>
                  )}
                  <button>
                    <MdOutlineEdit />
                  </button>
                </div>
              </li>
            );
          })}
        {!isFetching && data?.length === 0 && (
          <div>{justEdit ? 'Nenhum paciente encontrado' : 'Nenhum fisioterapeuta encontrado'}</div>
        )}
      </ListGeneratorBody>
    </ListGeneratorFullContainer>
  );
}
