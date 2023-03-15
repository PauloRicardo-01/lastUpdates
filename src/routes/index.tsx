import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginPage } from '../pages/AuthPage';
import { FisioPage } from '../pages/FisioPage';
import { HomePage } from '../pages/HomePage';

export function MyRoutes() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage formType='fisio-login' />} />
      <Route path='/pacientes' element={<HomePage />} />
      <Route path='/fisioterapeutas' element={<FisioPage />} />
      <Route path='/registro/paciente' element={<LoginPage formType='patient-register' />} />
      <Route path='/entrar/fisioterapeuta' element={<LoginPage formType='fisio-login' />} />
      <Route path='/registro/fisioterapeuta' element={<LoginPage formType='fisio-register' />} />
    </Routes>
  );
}
