import styled from 'styled-components';

export const WinnersBar = styled.div`
  padding: 10px 15px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.blackColor};
  background-color: ${(props) => props.theme.colors.whiteColor};
  margin-bottom: 30px;

  .status-message {
    text-transform: uppercase;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: 1.5vw;
    color: ${(props) => props.theme.colors.orangeColor};
  }
`;
