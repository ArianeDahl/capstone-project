import ListFruits from "@/pages/fruits";
import Header from "./Header";
import Link from "next/link";

export default function Fruits() {
  return (
    <>
      <Header />
      <h1>Available Fruits</h1>
      <ListFruits />
      <Link href="@/pages/index">Home</Link>
    </>
  );
}
