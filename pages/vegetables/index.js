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
      <Container>
        <TitleAvailability>Available Vegetables</TitleAvailability>
        <ListAvailability>
          {availableVegetables.map((item) => (
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
