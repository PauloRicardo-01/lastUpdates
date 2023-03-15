import { useContext, useEffect } from 'react';
import { AuthFormLogo, AuthFormModal, AuthModalContainer, AuthPageContainer } from './styles';
import BackImage from '../../assets/backgrond-image-2400x1177.jpg';
import { CancerRibbon } from '../../assets';
import { ActionContext } from '../../contexts/ActionContext';
import {
  FisioLoginForm,
  FisioRegistryForm,
  InstitutionalLoginForm,
  InstitutionalRegistryForm,
  PatientRegistryForm,
} from './Forms';

type Props = {
  formType:
    | 'fisio-login'
    | 'fisio-register'
    | 'institutional-login'
    | 'institutional-register'
    | 'patient-register';
};

export function LoginPage({ formType }: Props) {
  const { isMobile, setIsAuthPage } = useContext(ActionContext);

  useEffect(() => {
    setIsAuthPage(true);
  }, []);

  return (
    <AuthPageContainer>
      <img src={BackImage} alt='' />
      <div className='back-img-cover' />
      <AuthModalContainer>
        {!isMobile && (
          <AuthFormLogo>
            <CancerRibbon />
            <div>
              <h1>Oncolo</h1>
              <span>Saúde da mulher</span>
            </div>
          </AuthFormLogo>
        )}
        <AuthFormModal>
          {formType == 'fisio-login' && <FisioLoginForm />}
          {formType == 'fisio-register' && <FisioRegistryForm />}
          {formType == 'institutional-login' && <InstitutionalLoginForm />}
          {formType == 'institutional-register' && <InstitutionalRegistryForm />}
          {formType == 'patient-register' && <PatientRegistryForm />}
          {/* <AuthFormImages className='form-images'>
            <img src={LogoDCOMP} alt='' />
            <img src={LogoDCOMP} alt='' />
          </AuthFormImages> */}
        </AuthFormModal>
      </AuthModalContainer>
    </AuthPageContainer>
  );
}
