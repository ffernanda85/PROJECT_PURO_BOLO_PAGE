import * as s from "./styleCard";

export const Card = ({ item }) => {
  const { name, image, oldPrice, price } = item;

  return (
    <s.Carousel>
      <s.Item>
        <s.Image>
          <img src={image} alt={name} />
        </s.Image>
        <s.Info>
          <s.Name>{name}</s.Name>
          <s.OldPrice>U$ {oldPrice}</s.OldPrice>
          <s.Price>U$ {price} </s.Price>
        </s.Info>
      </s.Item>
    </s.Carousel>
  );
};
