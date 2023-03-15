import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../components/Input';
import { nameRegex } from '../../../components/Input/utils';
import { Loading } from '../../../components/Loading';
import { PatientContext } from '../../../contexts/PatientContext';
import { AuthFormLinks } from '../styles';

export function InstitutionalLoginForm() {
  const navigate = useNavigate();
  const [institutionalEmail, setInstitutionalEmail] = useState('');
  const [institutionalPassword, setInstitutionalPassword] = useState('');

  return (
    <>
      <h2>Login de Instituição</h2>
      <span>Preencha as informações para entrar no sistema</span>
      <Input
        id='institutional-login-email'
        label='Usuário'
        value={institutionalEmail}
        setValue={setInstitutionalEmail}
        fullBorder
      />
      <Input
        id='institutional-login-password'
        label='Senha'
        type='password'
        value={institutionalPassword}
        setValue={setInstitutionalPassword}
        fullBorder
      />
      <button className='btn-form' onClick={() => navigate('/')}>
        ENTRAR
      </button>
      <AuthFormLinks>
        <Link to='/'>Esqueceu a senha?</Link>
        <Link to='/registro/instituicao'>Ainda não tem conta? cadastre-se</Link>
      </AuthFormLinks>
    </>
  );
}

export function InstitutionalRegistryForm() {
  const navigate = useNavigate();
  const [fantasyName, setFantasyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [institutionalUser, setInstituionalUser] = useState('');
  const [institutionalPassword, setInstitutionalPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <>
      <h2>Cadastro de Instituição</h2>
      <span>Preencha as informações para se cadastrar</span>
      <Input
        id='fantasy-name'
        label='Nome Fantasia'
        mask='name'
        value={fantasyName}
        setValue={setFantasyName}
        fullBorder
      />
      <Input id='cnpj' label='CNPJ' mask='cnpj' value={cnpj} setValue={setCnpj} fullBorder />
      <Input
        id='institutional-user'
        label='Usuário'
        value={institutionalUser}
        setValue={setInstituionalUser}
        fullBorder
      />
      <Input
        id='institutional-register-password'
        label='Senha'
        type='password'
        value={institutionalPassword}
        setValue={setInstitutionalPassword}
        fullBorder
      />
      <Input
        id='institutional-password-confirmation'
        label='Confirme a senha'
        type='password'
        value={passwordConfirmation}
        setValue={setPasswordConfirmation}
        fullBorder
      />
      <button className='btn-form' onClick={() => navigate('/')}>
        CADASTRAR
      </button>
      <AuthFormLinks>
        <Link to='/entrar/instituicao'>Já possui uma conta? faça login</Link>
      </AuthFormLinks>
    </>
  );
}

export function FisioLoginForm() {
  const navigate = useNavigate();
  const [fisioEmail, setFisioEmail] = useState('');
  const [fisioPassword, setFisioPassword] = useState('');

  return (
    <>
      <h2>Login de Fisioterapeuta</h2>
      <span>Preencha as informações para entrar no sistema</span>
      <Input
        id='institutional-login-email'
        label='Usuário'
        value={fisioEmail}
        setValue={setFisioEmail}
        fullBorder
      />
      <Input
        id='institutional-login-password'
        label='Senha'
        type='password'
        value={fisioPassword}
        setValue={setFisioPassword}
        fullBorder
      />
      <button className='btn-form' onClick={() => navigate('/pacientes')}>
        ENTRAR
      </button>
      <AuthFormLinks>
        <Link to='/'>Esqueceu a senha?</Link>
        <Link to='/registro/fisioterapeuta'>Ainda não tem conta? cadastre-se</Link>
      </AuthFormLinks>
    </>
  );
}

export function FisioRegistryForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [registry, setRegistry] = useState('');
  const [fisioUser, setFisioUser] = useState('');
  const [fisioPassword, setFisioPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <>
      <h2>Cadastro de Fisioterapeuta</h2>
      <span>Preencha as informações para se cadastrar</span>
      <Input id='fisio-name' label='Nome' value={name} setValue={setName} fullBorder />
      <Input
        id='fisio-registry'
        label='Matrícula'
        value={registry}
        setValue={setRegistry}
        fullBorder
      />
      <Input id='fisio-user' label='E-mail' value={fisioUser} setValue={setFisioUser} fullBorder />
      <Input
        id='fisio-password'
        label='Senha'
        type='password'
        value={fisioPassword}
        setValue={setFisioPassword}
        fullBorder
      />
      <Input
        id='fisio-password-confirmation'
        label='Confirme a senha'
        type='password'
        value={passwordConfirmation}
        setValue={setPasswordConfirmation}
        fullBorder
      />
      <button className='btn-form' onClick={() => navigate('/')}>
        CADASTRAR
      </button>
      <AuthFormLinks>
        <Link to='/entrar/fisioterapeuta'>Já possui uma conta? faça login</Link>
      </AuthFormLinks>
    </>
  );
}

export function PatientRegistryForm() {
  const navigate = useNavigate();
  const { isFetching } = useContext(PatientContext);
  const { postPatient } = useContext(PatientContext);
  const [name, setName] = useState('');
  const [registry, setRegistry] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCPF] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(0);

  function handleCalc() {
    const heightNumber = Number(height.replaceAll('.', '').replace(',', '.'));
    const weightNumber = Number(weight.replaceAll('.', '').replace(',', '.'));

    const newBmi = Number((weightNumber / Math.pow(heightNumber, 2)).toFixed(2));

    setBmi(newBmi);
  }

  async function handlePostPatient() {
    const heightNumber = Number(height.replaceAll('.', '').replace(',', '.'));
    const weightNumber = Number(weight.replaceAll('.', '').replace(',', '.'));
    const treatedDate = date.replaceAll('/', '');
    const convertedDate =
      treatedDate.substring(4, 8) +
      '-' +
      treatedDate.substring(2, 4) +
      '-' +
      treatedDate.substring(0, 2);

    postPatient({
      matricula: registry,
      nome: name,
      altura: heightNumber,
      peso: weightNumber,
      cpf: cpf.replaceAll('.', '').replace('-', ''),
      data_nascimento: convertedDate,
      telefone: phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', ''),
    });
  }

  useEffect(() => {
    handleCalc();
  }, [height, weight]);

  return (
    <>
      <h2>Cadastro de Paciente</h2>
      <span>Preencha os campos com os dados do seu novo paciente</span>
      <Input
        id='patient-name'
        label='Nome'
        mask='letter'
        value={name}
        setValue={setName}
        fullBorder
      />
      <Input
        id='patient-registry'
        label='Matrícula'
        mask='number'
        value={registry}
        setValue={setRegistry}
        fullBorder
      />
      <Input
        id='patient-birth-date'
        label='Data de nascimento'
        mask='date'
        value={date}
        setValue={setDate}
        fullBorder
      />
      <Input
        id='patient-phone'
        label='Telefone'
        mask='phone'
        value={phone}
        setValue={setPhone}
        fullBorder
      />
      <Input id='patient-cpf' label='CPF' mask='cpf' value={cpf} setValue={setCPF} fullBorder />
      <Input
        id='patient-height'
        label='Altura (m)'
        mask='float'
        value={height}
        setValue={setHeight}
        fullBorder
      />
      <Input
        id='patient-weight'
        label='Peso (kg)'
        mask='float'
        value={weight}
        setValue={setWeight}
        fullBorder
      />
      <div className='bmi'>
        <span>IMC:</span> {!Number.isNaN(bmi) && Number.isFinite(bmi) ? bmi.toFixed(2) : '0.00'}
      </div>
      <button className='btn-form' onClick={() => handlePostPatient()}>
        {isFetching && <Loading color='#7D0BD7' />}
        {!isFetching && 'CADASTRAR'}
      </button>
    </>
  );
}
