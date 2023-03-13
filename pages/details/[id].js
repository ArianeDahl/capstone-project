import Header from "@/components/Header";
import { data } from "@/lib/data";
import styled from "styled-components";
import { useRouter } from "next/router";
import BackButton from "@/components/BackButton";
//import Image from "next/image";

export default function Details({ item }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <Container>
        <Item>
          <h2>{item.name}</h2>
          <Availability>
            Available from {item.month_start} to {item.month_end}
          </Availability>
        </Item>
      </Container>
      <BackButton />
    </>
  );
}

export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = data.find((item) => item.id.toString() === params.id);

  return { props: { item } };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const Availability = styled.p`
  font-style: italic;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  color: black;
`;
