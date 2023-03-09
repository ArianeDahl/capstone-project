import Header from "@/components/Header";
import Link from "next/link";
import { data } from "@/lib/data";

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
      <h2>Available Fruits</h2>
      <ul>
        {availableFruits.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Link href="/">Home</Link>
    </>
  );
}
