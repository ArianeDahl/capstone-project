import FruitButton from "../components/FruitButton";
import VeggieButton from "@/components/VeggieButton";
import Header from "../components/Header";
import styled from "styled-components";


export default function Home() {
  return (
    <main>
      <div>
      <Header />
      <h2>Seasonal Fruits & Veggies</h2>
      <p>Eating seasonal made easy!</p>
      <FruitButton />
      <VeggieButton />
      </div>
    </main>
  );
}

