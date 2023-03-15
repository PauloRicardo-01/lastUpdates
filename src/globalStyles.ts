import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: open, sans-serif, Inter, Avenir, Helvetica, Arial;

    background-color: transparent;
    transition: ease-in-out 0.1s;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html, body {
    height: 100vh;
    overflow: hidden;
  }

  #root {
    height: 100%;
  }

  input, button {
    outline: none;
    border: 1px solid gray;
  }

  button {
    cursor: pointer;
  }

  ul, ol {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export const GlobalContainer = styled.div`
  width: max(300px, 100vw);
  overflow: hidden;
`;

type HeroImageProps = {
  isVisible: boolean;
  isAuthPage: boolean;
};

export const PageContainer = styled.div<HeroImageProps>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  overflow-y: ${(props) => (props.isVisible ? 'scroll' : 'hidden')};
  background-color: ${(props) => props.theme.colors.background2};
`;

export const HeroImageContainer = styled.div<HeroImageProps>`
  width: 100%;
  height: ${(props) => (props.isVisible ? '150px' : '0')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #5704aa, #b04e07, #0043ef);

  div {
    width: 100%;
    height: calc(100% - 6px);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: rgba(125, 11, 215, 0.19);

    span {
      text-align: center;
      font-size: 1.7rem;
      font-weight: 600;
    }
  }
`;

type MenuLinkProps = {
  padding: string;
};

export const MenuLink = styled(Link)<MenuLinkProps>`
  width: 100%;
  height: 36px;
  padding: ${(props) => props.padding ?? '0'};
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${(props) => props.theme.colors.text};

  svg {
    background-color: transparent;
    font-size: 1.1rem;
    path {
      fill: ${(props) => props.theme.colors.primary};
    }

    &.home,
    &.user-group,
    &.form {
      margin-bottom: 2px;
    }

    &.user-group {
      color: ${(props) => props.theme.colors.primary};
      path {
        fill: transparent;
      }
    }
  }
`;
