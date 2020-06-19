import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 0.5rem;
  flex: 1;

  .card-inner {
    width: 100%;
    height: 100%;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
    flex-direction: column;
    border-radius: 12px;
    .card-name {
      margin-bottom: 10px;
      span {
        display: block;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: ${(props) => props.theme.fontWeight.semiBold};
      }
    }
  }
`;
