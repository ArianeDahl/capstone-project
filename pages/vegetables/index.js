import Header from "@/components/Header";
import Link from "next/link";
import { data } from "@/lib/data";

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
      <ul>
        {availableVegetables.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Link href="/">Home</Link>
    </>
  );
}
