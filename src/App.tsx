import { useContext, useEffect, useRef, useState } from 'react';
import { BrowserRouter, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { AuthContext } from './contexts/AuthContext';
import { GlobalContainer, GlobalStyle, HeroImageContainer, PageContainer } from './globalStyles';
import { MyRoutes } from './routes';
import { darkTheme, lightTheme } from './themes';
import { ActionContext } from './contexts/ActionContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isAuthPage } = useContext(ActionContext);
  const { isLightTheme } = useContext(AuthContext);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ToastContainer />
      <BrowserRouter>
        <GlobalContainer>
          <PageContainer isVisible={false} isAuthPage={isAuthPage}>
            <MyRoutes />
          </PageContainer>
        </GlobalContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
