import Header from "@/components/Header";
import BackButton from "@/components/BackButton";
import { data } from "@/lib/data";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";

//import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Details({ item }) {
  const router = useRouter();
  const { data, error, isLoading } = useSWR("/api/recipes", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Failed to load</h1>;
  }

  console.log(data);
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
// https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=a57809bb&app_key=e7fef45f8e353f23a65c08642a5ea9fd&dishType=Main%20course
