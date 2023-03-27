import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const FormTitle = styled.h3`
  font-size: 1, 5rem;
  margin-bottom: 30px;
  color: #9d4e5a;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #f4e6e7;
  padding: 20px;
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  padding: 0px;
  font-size: 1rem;
  color: #575d57;
`;

export const SytledInput = styled.input`
  border-radius: 5px;
  border: 1px solid #b76e79;
  margin: 5px;
  padding: 5px;
  font-size: 1rem;
`;
export const SytledRange = styled.input`
  margin: 5px;
  justify-content: center;
  align-items: center;
  -webkit-appearance: none;
  background: #f4f4f4;
  outline: none;
  height: 15px;
  width: 90%;
  border-radius: 10px;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background-color: #494399;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #494399;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const FormButton = styled.button`
  color: #f1dee3;
  background-color: #b76e79;
  border: solid 1px;
  border-color: #b76e79;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #b76e79;
  }
`;
