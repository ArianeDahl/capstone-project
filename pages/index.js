import FruitButton from "../components/FruitButton";
import VeggieButton from "@/components/VeggieButton";
import Header from "../components/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <h2>Seasonal dishes made easy!</h2>
        <p>See what fruits & vegetables are in season this month:</p>
        <FruitButton />
        <VeggieButton />
      </div>
    </main>
  );
}
