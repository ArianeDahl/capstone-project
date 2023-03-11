import Image from "next/image";
import Link from "next/link";
import { data } from "@/lib/data";
import styled from "styled-components";

export default function FruitDetails({ id }) {
  const fruit = data.find((item) => item.id === parseInt(id));

  return (
    <>
      <h2>{fruit.name}</h2>
      <Image src={fruit.src} alt={fruit.name} width={300} height={300} />
      <p>
        Season: {fruit.season_start} - {fruit.season_end}
      </p>
      <Link href="/">Back to all Fruits</Link>
    </>
  );
}

/*
    const router = useRouter();
  const { id } = router.query;
  const imageUrl = `/assets${id}.jpg`;

  return <Image src={imageUrl} alt={`Image ${id}`} width={50} height={50} />;

*/
