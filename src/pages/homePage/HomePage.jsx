import { Carousel } from "../../components/carousel/Carousel";
import * as s from "./styleHomePage";

export const HomePage = () => {
  return (
    <s.HomePageContainer>
      {/*  <h1>Home Page</h1> */}
      {/* <s.ContainerCarousel>
        <Carousel />
      </s.ContainerCarousel> */}
      <s.Text>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eius veritatis cumque sit! Ullam consequuntur voluptatibus fuga similique, cum eaque nihil culpa commodi quis nisi optio, nostrum, ipsa dolores! Animi quisquam quam soluta excepturi corporis ipsa odio consequuntur mollitia laboriosam similique alias consectetur incidunt odit beatae, deserunt iusto rerum ut.
        </p>
        
      </s.Text>
      
      <s.BannerContainer>
        <s.ImageBannerContainer>
          <s.ImageBanner
            src="https://uploaddeimagens.com.br/images/004/691/249/full/pirulitos_chocolate.jpg?1702591381"
            alt="Banner img"
          />
        </s.ImageBannerContainer>
      </s.BannerContainer>

    </s.HomePageContainer>
  );
};
