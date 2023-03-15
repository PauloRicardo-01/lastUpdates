import styled from 'styled-components';

export const AuthPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  .back-img-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 200;
  }
`;

export const AuthModalContainer = styled.div`
  width: 94%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 300;

  @media screen and (min-width: 1000px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 100px;
  }

  @media screen and (min-width: 1367px) {
    padding: 0 250px;
  }
`;

export const AuthFormLogo = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};

  svg {
    width: 180px;
    height: 180px;

    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 4rem;
    }

    span {
      color: ${(props) => props.theme.colors.white};
      font-size: 1.7rem;
      font-weight: 600;
    }
  }

  @media screen and (min-width: 1367px) {
    svg {
      width: 220px;
      height: 220px;
    }

    div {
      h1 {
        font-size: 5rem;
      }

      span {
        color: ${(props) => props.theme.colors.white};
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }
`;

export const AuthFormModal = styled.div`
  width: 100%;
  height: max-content;
  max-width: 360px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: #ffffff;
  border-radius: 10px;
  z-index: 500;

  h2 {
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
  }

  span {
    margin: 6px 0;
    color: ${(props) => props.theme.colors.primary};
  }

  .btn-form {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primaryOpacity};

    :hover,
    ::selection,
    :focus {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }

  div {
    &.bmi {
      width: 100%;
      margin-top: 6px;
    }
  }

  @media screen and (min-width: 600px) {
    width: 86%;
    padding: 30px;
  }

  @media screen and (min-width: 1300px) {
    width: 72%;
  }
`;

export const AuthFormLinks = styled.div`
  width: 100%;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  a {
    color: blue;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const AuthFormImages = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  img {
    width: 100px;
  }
`;
