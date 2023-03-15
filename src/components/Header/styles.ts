import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderFullContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid gray;
`;

export const HeaderLogo = styled(Link)`
  padding-left: 50px;

  span {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.7rem;
    font-weight: bold;
  }
`;

export const HeaderNavsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeaderTopNav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
    gap: 16px;

    li {
      min-height: 100%;
      display: flex;

      a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        color: ${(props) => props.theme.colors.accessBlue};
      }

      button {
        border: none;
        color: ${(props) => props.theme.colors.accessBlue};

        &.user-button {
          width: 50px;
          height: 50px;
          padding-top: 5px;
          color: #ffffff;
          background-color: ${(props) => props.theme.colors.primaryOpacity};
          font-size: 1.8rem;
        }

        &.access-icons {
          svg {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

export const HeaderBottomNav = styled.nav`
  width: 100%;
  height: 40px;
  padding-right: 50px;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: ${(props) => props.theme.colors.primaryOpacity};

    li {
      height: 100%;
      display: flex;

      a {
        height: 100%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        gap: 4px;
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.background};
        text-transform: uppercase;

        svg {
          width: 20px;
          height: 20px;

          path {
            stroke: ${(props) => props.theme.colors.primary};
          }

          &.fill {
            path {
              fill: ${(props) => props.theme.colors.primary};
            }
          }
        }
      }
    }
  }
`;
