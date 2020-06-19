import styled from 'styled-components';

export const WinnersBar = styled.div`
  padding: 10px 15px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.blackColor};
  background-color: ${(props) => props.theme.colors.whiteColor};
  margin: 0 auto 30px auto;
  flex: 1;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .status-message {
    text-transform: uppercase;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: 1.2vw;
    color: ${(props) => props.theme.colors.orangeColor};
  }
`;
