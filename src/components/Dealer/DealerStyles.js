import styled from 'styled-components';

export const Points = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #323232;
  flex-direction: column;
  width: 40px;
  height: 40px;
  margin: 0 auto 15px auto;
  border-radius: 100%;
  span {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    font-size: 20px;
    display: block;
    color: ${(props) => props.theme.colors.whiteColor};
  }
`;
