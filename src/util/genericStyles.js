import styled from 'styled-components';

export const BasicWrapper = styled.div`
  justify-content: center;
  text-align: center;
  font-color: blue;

  .test_list_header {
    color: #4777fc;
  }
`;

export const BasicTableWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  justify-content: center;
  width: 60%;
`;

export const BasicAddWrapper = styled.div``;

export const BasicAddInputWrapper = styled.div`
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
  .form_input {
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  .form_input_number {
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 20%;
    margin-left: 15%;
    font-size: 85%;
  }
`;

export const BasicAddButtonWrapper = styled.div`
  text-align: right;
  .button {
    margin-right: 15%;
  }
`;
