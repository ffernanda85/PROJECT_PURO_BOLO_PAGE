import { Carousel } from "../../components/carousel/Carousel";
import * as s from "./styleHomePage";

export const HomePage = () => {
  
  return (
    <s.HomePageContainer>
      <h1>Home Page</h1>
      <s.ContainerCarousel>
        <Carousel />
      </s.ContainerCarousel>
      
      {/* <s.ContainerButtons>
        <s.LeftButton onClick={handleLeftClick} >
          <img src="/static/images/216151_right_chevron_icon.png" alt="Left Button" />
        </s.LeftButton>
        
        <s.RightButton onClick={(e) => handleRightClick(e, )}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Right Button" />
        </s.RightButton>
      </s.ContainerButtons> */}
    </s.HomePageContainer>
  );
};
