import Header from "@/components/Header";
import Link from "next/link";
import { data } from "@/lib/data";
import {
  TitleAvailability,
  Container,
  ListItem,
  ListAvailability,
  ListTitle,
} from "@/components/StyledAvailability";
import BackButton from "@/components/BackButton";
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
        <TitleAvailability>Available Fruits</TitleAvailability>
        <ListAvailability>
          {availableFruits.map((item) => (
            <ListItem key={item.id}>
              <ListTitle>{item.name}</ListTitle>
              <Link href={`/details/${item.id}`}>Get some inspiration!</Link>
            </ListItem>
          ))}
        </ListAvailability>
      </Container>
      <BackButton />
    </>
  );
}
