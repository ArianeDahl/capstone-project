import { data } from "../../lib/data";
import Link from "next/link";
import Header from "@/components/Header";

function getAvailableFruits() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  return data.filter((fruit) => {
    const startMonth = new Date(fruit.month_start).getMonth() + 1;
    const endMonth = new Date(fruit.month_end).getMonth() + 1;
    return startMonth <= currentMonth && currentMonth <= endMonth;
  });
}

export default function ListFruits() {
  const fruits = getAvailableFruits();
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}
