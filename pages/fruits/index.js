import Header from "@/components/Header";
import Link from "next/link";
import { data } from "@/lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function Fruits() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const availableFruits = data.filter((item) => {
    return (
      item.category === "Fruit" &&
      currentMonth >= item.month_start &&
      currentMonth <= item.month_end
    );
  });

  return (
    <>
      <Header />
      <Container>
        <h2>Available Fruits</h2>
        <FruitList>
          {availableFruits.map((item) => (
            <FruitItem key={item.id}>
              <h3>{item.name}</h3>
              <Link href={`/details/${item.id}`}>Get some inspiration!</Link>
            </FruitItem>
          ))}
        </FruitList>
      </Container>
      <Link href="/">Back</Link>
    </>
  );
}

const FruitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

const FruitItem = styled.li`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: papayawhip;
  }
`;

const Container = styled.div`
  justify-content: center;
`;
