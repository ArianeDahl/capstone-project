import Header from "@/components/Header";
import Link from "next/link";
import { data } from "@/lib/data";
import Image from "next/image";
import {
  TitleAvailability,
  Container,
  ListItem,
  ListAvailability,
  ListTitle,
  StyledLink,
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
  // an array of objetcs in alphabetical order
  availableVegetables.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <Header />
      <Container>
        <TitleAvailability>Available Vegetables</TitleAvailability>
        <ListAvailability>
          {availableVegetables.map((item) => (
            <ListItem key={item.id}>
              <StyledLink href={`/details/${item.id}`}>
                <ListTitle>{item.name}</ListTitle>
              </StyledLink>
              <Link href={`/details/${item.id}`}>
                <Image
                  src={item.src}
                  alt={item.name}
                  height={100}
                  width={100}
                />
              </Link>
            </ListItem>
          ))}
        </ListAvailability>
      </Container>
      <BackButton />
    </>
  );
}
