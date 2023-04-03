import styled from "styled-components";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.back()} aria-label="Previous page">
        Back
      </Button>
    </>
  );
}

const Button = styled.button`
  background-color: #55a3a3;
  border: 1px solid ##55a3a3;
  border-radius: 5px;
  color: #e4eeee;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  margin-bottom: 30px;
  margin-top: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e4eeee;
    color: #55a3a3;
  }
`;
