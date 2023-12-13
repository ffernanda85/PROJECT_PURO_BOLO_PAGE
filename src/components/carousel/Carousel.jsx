import { useEffect, useState, useRef } from "react";
import { handleLeftClick, handleRightClick } from "../../constants/constants";
import { Card } from "../cards/Card";
import * as s from "./stylesCarousel";

export const Carousel = () => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5173/static/shoes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <div>
      <s.Container ref={ carousel } >
        {data.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </s.Container>

      <s.ContainerButtons>
        <s.LeftButton onClick={(e) => handleLeftClick(e, carousel)} >
          <img src="/static/images/216151_right_chevron_icon.png" alt="Left Button" />
        </s.LeftButton>
        
        <s.RightButton onClick={(e) => handleRightClick(e, carousel)}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Right Button" />
        </s.RightButton>
      </s.ContainerButtons>
    </div>
  );
};
