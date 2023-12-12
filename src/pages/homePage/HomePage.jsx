import { useEffect, useState } from "react";
import { Carousel } from "../../components/carousel/Carousel";
import * as s from "./styleHomePage";

export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/static/shoes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <s.HomePageContainer>
      <h1>Home Page</h1>
          <s.ContainerCarousel>
              {data.map((item) => {
                  return (
                      <Carousel
                      key={item.id}
                      item={item}
                      />
                  )
              })}
      </s.ContainerCarousel>
    </s.HomePageContainer>
  );
};
