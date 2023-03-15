import { useContext, useEffect } from 'react';
import { Header } from '../../components/Header';
import { ListGenerator } from '../../components/ListGenerator';
import { FisioContext } from '../../contexts/FisioContext';
import { HeroImageContainer } from '../../globalStyles';
import { HomePageFullContainer } from '../HomePage/styles';

export function FisioPage() {
  const { getFisios, filteredFisios, isFetching } = useContext(FisioContext);

  useEffect(() => {
    getFisios();
  }, []);

  return (
    <>
      <Header />
      <HeroImageContainer isVisible={true} isAuthPage={false}>
        <div>
          <span>Fisioterapeutas</span>
        </div>
      </HeroImageContainer>
      <HomePageFullContainer>
        <ListGenerator
          btnLabel='Adicionar fisioterapeuta'
          data={filteredFisios}
          isFetching={isFetching}
        />
      </HomePageFullContainer>
    </>
  );
}
