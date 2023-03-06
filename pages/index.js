import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <Heading>Seasony</Heading>
      <div>
      <h2>Seasonal Fruits & Veggies</h2>
      <p>Eating seasonal made easy!</p>
      <button type="button">Fruits</button>
      <button type="button">Veggies</button>
      </div>
    </main>
  );
}

const Heading = styled.h1`
text-align: center;
`;
