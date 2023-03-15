import styled from 'styled-components';

type Props = {
  hasText: boolean;
  width?: string;
};

export const SearchBarContainer = styled.div<Props>`
  width: ${(props) => props.width ?? '100%'};
  min-height: 30px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => (props.hasText ? props.theme.colors.primaryOpacity : 'gray')};
  border-radius: 4px;
  overflow: hidden;

  input {
    width: calc(100% - 30px);
    height: 100%;
    padding: 0 6px;
    color: ${(props) => props.theme.colors.text};
    border: none;
  }

  button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background-color: ${(props) => (props.hasText ? props.theme.colors.primaryOpacity : 'gray')};
    border: none;
    cursor: ${(props) => (props.hasText ? 'pointer' : 'default')};
  }
`;
