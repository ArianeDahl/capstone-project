import Header from "@/components/Header";
import Link from "next/link";
import { data } from "@/lib/data";
import styled from "styled-components";

export default function Vegetables() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const availableVegetables = data.filter((item) => {
    return (
      item.category === "Vegetable" &&
      currentMonth >= item.month_start &&
      currentMonth <= item.month_end
    );
  });

  return (
    <>
      <Header />
      <h2>Available Vegetables</h2>
      <VeggieList>
        {availableVegetables.map((item) => (
          <VeggieItem key={item.id}>{item.name}</VeggieItem>
        ))}
      </VeggieList>
      <Link href="/">Home</Link>
    </>
  );
}

const VeggieList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
`;

const VeggieItem = styled.li`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
`;
