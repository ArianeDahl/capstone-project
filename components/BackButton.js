import styled from "styled-components";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.back()}>Back</Button>
    </>
  );
}

const Button = styled.button`
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: darkgreen;
    color: #ffffff;
  }
`;
