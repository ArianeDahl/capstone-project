import styled from "styled-components";

export const FormContainer = styled.div`
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

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  background-color: #fbeed9;
  padding: 20px;
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #575d57;
`;

export const SytledInput = styled.input`
  border-radius: 5px;
  border: 1px solid #b76e79;
  padding: 0.5rem;
  font-size: 1rem;
`;
export const SytledRange = styled.input`

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background-color: #green;
  border-radius: 50%;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background-color: #9d4e5a;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const FormButton = styled.button`
  color: black;
  background-color: #b76e79;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: papayawhip;
    color: white;
  }
`;
