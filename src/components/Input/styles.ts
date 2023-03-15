import styled from 'styled-components';

type InputProps = {
  float: boolean;
  isPassword?: boolean;
  visiblePassword?: boolean;
  fullBorder?: boolean;
  width?: string;
};

export const InputContainer = styled.div<InputProps>`
  width: ${(props) => props.width ?? '100%'};
  max-width: 300px;
  height: 46px;
  position: relative;
  display: flex;
  align-items: flex-end;

  label {
    padding: ${(props) => (props.fullBorder ? '0 4px' : '0')};
    position: absolute;
    top: ${(props) => (props.float ? '0' : '17px')};
    left: ${(props) => (props.fullBorder ? '4px' : '0')};
    color: ${(props) => (props.float ? props.theme.colors.primary : 'gray')};
    background-color: ${(props) =>
      props.fullBorder ? props.theme.colors.white : props.theme.colors.background};
    transition: ease-in-out 0.2s;
    cursor: text;
  }

  input {
    width: 100%;
    height: ${(props) => (props.fullBorder ? '40px' : '30px')};
    padding: ${(props) =>
      props.isPassword
        ? `0 30px 0 ${props.fullBorder ? '8px' : '0'}`
        : props.fullBorder
        ? '6px 8px 0'
        : '0'};
    color: ${(props) => props.theme.colors.text};
    border: ${(props) =>
      props.fullBorder ? `2px solid ${props.float ? props.theme.colors.primary : 'gray'}` : 'none'};
    border-bottom: 2px solid ${(props) => (props.float ? props.theme.colors.primary : 'gray')};
    border-radius: ${(props) => (props.fullBorder ? '4px' : '0')};
    font-size: 1.05rem;
    transition: ease-in-out 0.2s;
  }

  button {
    width: 22px;
    height: 22px;
    position: absolute;
    right: 6px;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    border: none;

    svg {
      path {
        fill: ${(props) => (props.visiblePassword ? props.theme.colors.primary : 'gray')};
      }
    }
  }
`;

export const RadioInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  ::selection {
    background-color: transparent;
  }

  label {
    padding: 0 6px 0 2px;
    cursor: pointer;

    ::selection {
      background-color: transparent;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;

  input {
    appearance: none;
    width: 16px;
    height: 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 50%;
    cursor: pointer;

    :checked {
      ::after {
        content: '';
        width: 12px;
        height: 12px;
        position: absolute;
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 50%;
      }
    }
  }
`;

export const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;

  input {
    -webkit-appearance: none;
    width: 130px;
    height: 8px;
    background-color: rgba(125, 11, 215, 0.2);
    outline: none;
    border: none;
    border-radius: 9px;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 50%;
      opacity: 1;
      cursor: pointer;
    }
  }
`;

type SwitchInputProps = {
  optionsVisible?: boolean;
};

export const SwitchInputContainer = styled.div<SwitchInputProps>`
  width: 100%;
  max-width: 133px;
  height: 36px;
  padding: 0 0 0 10px;
  position: relative;
  display: flex;

  div {
    width: calc(100% - 10px);
    height: ${(props) => (props.optionsVisible ? 'max-content' : '0')};
    position: absolute;
    top: 36px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    border: ${(props) =>
      props.optionsVisible ? `2px solid ${props.theme.colors.primary}` : 'none'};
    border-top: none;
    z-index: 200;
    overflow: hidden;
    transition: 0s;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 1.02rem;

    &.title {
      width: 100%;
      height: 100%;
      gap: 4px;
      color: ${(props) => props.theme.colors.primary};
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
      font-weight: 600;
    }

    &.option {
      height: 30px;
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};
    }
  }
`;
