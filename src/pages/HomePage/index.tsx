import { useContext, useEffect } from 'react';
import { Header } from '../../components/Header';
import { ListGenerator } from '../../components/ListGenerator';
import { PatientContext } from '../../contexts/PatientContext';
import { HeroImageContainer } from '../../globalStyles';
import { HomePageFullContainer } from './styles';

export function HomePage() {
  const { getPatients, filteredPatients, isFetching } = useContext(PatientContext);

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <>
      <Header />
      <HeroImageContainer isVisible={true} isAuthPage={false}>
        <div>
          <span>Pacientes</span>
        </div>
      </HeroImageContainer>
      <HomePageFullContainer>
        <ListGenerator
          btnLabel='Adicionar paciente'
          justEdit
          data={filteredPatients}
          isFetching={isFetching}
        />
      </HomePageFullContainer>
    </>
  );
}
