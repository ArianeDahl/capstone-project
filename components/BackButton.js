import styled from "styled-components";

export default function BackButton() {
  return (
    <>
      <Button onClick={() => router.back()}>Back</Button>
    </>
  );
}

const Button = styled.button``;
