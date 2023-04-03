import FavoriteButton from "./Favorite/FavoriteButton";
import styled from "styled-components";

export default function ItemCard({ item, onHandleToggleFavorite }) {
  const handleClick = () => {
    onHandleToggleFavorite(item.id);
  };
  console.log(item);

  return (
    <StyledItem>
      <StyledButton onClick={handleClick}>
        <FavoriteButton isFavorite={item.isFavorite} />
      </StyledButton>
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
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  position: absolute;
  margin: 10px;
  top: 0;
  right: 0;
  z-index: 1;
  font-size: 1.3rem;
  color: #b76e76;

  &:hover {
    color: #e6d9d9;
  }
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
