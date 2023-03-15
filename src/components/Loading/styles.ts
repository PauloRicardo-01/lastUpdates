import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

type Props = {
  color?: string;
};

export const LoadingContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #5704aa, #b04e07, #0043ef);
  border-radius: 50%;
  animation: ${rotate} linear infinite 0.4s;

  ::after {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 50%;
    background-color: ${(props) => props.color ?? props.theme.colors.background};
  }
`;
