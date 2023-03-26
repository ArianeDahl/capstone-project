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

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background-color: #darkblue;
  border-radius: 50%;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background-color: #white;
    border-radius: 10px;
    cursor: pointer;

    &::-moz-range-thumb {
      width: 20px;
      height: 20px;
      background: #darkblue;
      cursor: pointer;
      border-radius: 50%;
    }
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
