import * as s from './stylesCarousel'

export const Carousel = () => {
    return (
        <s.Container>
            <s.Logo>
                <img src="/static/images/super-shoes.png" alt="Super Shoes Logo" />
            </s.Logo>
            <s.Carousel>
                <s.Item>
                    <s.Image>
                        <img src="https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg" alt="shoe" />
                    </s.Image>
                    <s.Info>
                        <s.Name>Super Shoe 1</s.Name>
                        <s.OldPrice>U$ 299.00</s.OldPrice>
                        <s.Price>U$ 199.00</s.Price>
                    </s.Info>
                </s.Item>
            </s.Carousel>
            
        </s.Container>
    )
}