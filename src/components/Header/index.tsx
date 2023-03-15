import { useContext } from 'react';
import { BsCircleHalf } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FaCookieBite, FaWpforms } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { VscGraph } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import {
  HeaderBottomNav,
  HeaderFullContainer,
  HeaderLogo,
  HeaderNavsContainer,
  HeaderTopNav,
} from './styles';
import { CancerTape } from '../../assets';

export function Header() {
  const { setIsLightTheme, isLightTheme } = useContext(AuthContext);

  return (
    <HeaderFullContainer>
      <HeaderLogo to='/'>
        <span>Oncolo</span>
      </HeaderLogo>
      <HeaderNavsContainer>
        <HeaderTopNav>
          <ul>
            <li>
              <Link to='/'>Acessibilidade</Link>
            </li>
            <li>
              <button className='access-icons'>
                <FaCookieBite />
              </button>
            </li>
            <li>
              <button className='access-icons'>
                <BsCircleHalf onClick={() => setIsLightTheme(!isLightTheme)} />
              </button>
            </li>
            <li>
              <button className='user-button'>
                <BiUser />
              </button>
            </li>
          </ul>
        </HeaderTopNav>
        <HeaderBottomNav>
          <ul>
            <li>
              <Link to='/pacientes'>
                <HiOutlineUserGroup />
                Pacientes
              </Link>
            </li>
            <li>
              <Link to='/fisioterapeutas'>
                <HiOutlineUserGroup />
                Fisioterapeutas
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FaWpforms className='fill' />
                Formulários
              </Link>
            </li>
            <li>
              <Link to='/'>
                <VscGraph className='fill' />
                Gráficos
              </Link>
            </li>
          </ul>
        </HeaderBottomNav>
      </HeaderNavsContainer>
    </HeaderFullContainer>
  );
}
