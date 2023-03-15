import styled from 'styled-components';

type Props = {
  width?: string;
};

export const ListGeneratorFullContainer = styled.div<Props>`
  width: ${(props) => props.width ?? '100%'};
  max-width: 1440px;
  min-height: 100%;
  padding: 30px 40px;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
`;

export const ListGeneratorHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  .add-button {
    min-width: max-content;
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${(props) => props.theme.colors.text};
    border: none;
    font-size: 1rem;
    text-transform: uppercase;

    svg {
      font-size: 1.7rem;
      fill: #0043ef;
    }
  }
`;

export const ListGeneratorBody = styled.ul`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  li {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;

    span {
      color: ${(props) => props.theme.colors.text};
    }

    div {
      display: flex;
      gap: 6px;

      button {
        border: none;

        svg {
          fill: ${(props) => props.theme.colors.primary};
          font-size: 1.2rem;
        }
      }
    }
  }
`;
