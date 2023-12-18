import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: aquamarine; */
`;
export const BannerContainer = styled.div`
    max-width: 100vw;
    height: 100vh;
    /* background-color: blueviolet; */
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImageBannerContainer = styled.div`
  position: absolute;
  top: 25vh;
  width: 80%;
  height: 100%;
  /* background-color: bisque; */
  text-align: center;
  z-index: -1;
`;
export const ImageBanner = styled.img`
  width: 85%;
  height: auto;
`;

export const Text = styled.div`
    /* p {
       z-index: -1;
    } */
`

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
