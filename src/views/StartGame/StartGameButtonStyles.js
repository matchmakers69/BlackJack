import styled from 'styled-components';

export const StartGameButton = styled.button`
  height: 40px;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.colors.blackColor};
  color: ${(props) => props.theme.colors.whiteColor};
  border: ${(props) => props.theme.buttonReset.border};
  cursor: ${(props) => props.theme.buttonReset.cursor};
  box-shadow: ${(props) => props.theme.buttonReset.boxShadow};
  text-shadow: ${(props) => props.theme.buttonReset.textShadow};
  font-size: 1.8rem;
  position: relative;
  a {
    color: ${(props) => props.theme.colors.whiteColor};
    text-decoration: none;
    padding: 0 22px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
