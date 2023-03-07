import styled from "styled-components";
import Header from "@/components/Header/header";

export default function Home() {
  return (
    <main>
      <div>
      <Header />
      <h2>Seasonal Fruits & Veggies</h2>
      <p>Eating seasonal made easy!</p>
      <button type="button" className="button">Fruits</button>
      <button type="button" className="button">Veggies</button>
      </div>
    </main>
  );
}

