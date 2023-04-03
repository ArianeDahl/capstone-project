import FavoriteButton from "./Buttons/FavoriteButton";
import styled from "styled-components";

export default function ItemCard({ item, isFavorite, setIsFavorite }) {
  return (
    <StyledItem>
      <FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      <Title>{item.name}</Title>
      <Availability>
        Availability:{" "}
        {new Date(item.season_start).toLocaleString("default", {
          month: "long",
        })}{" "}
        -{" "}
        {new Date(item.season_end).toLocaleString("default", {
          month: "long",
        })}
      </Availability>
    </StyledItem>
  );
}

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #5d9b9b;
  position: relative;
`;

const Title = styled.h2`
  padding: 10px;
  color: #5d9b9b;
  font-weight: 500;
`;

const Availability = styled.p`
  margin: 10px;
  padding: 20px:
  font-weight: 600;
  font-size: 1.2em;
  color: #b76e76;
  `;
