import * as s from './stylesCarousel'

export const Carousel = ({item}) => {
    const { name, price, oldPrice, image} = item
    
    return (
        <s.Container>
            {/* <s.Logo>
                <img src="/static/images/super-shoes.png" alt="Super Shoes Logo" />
            </s.Logo> */}
            <s.Carousel>
                <s.Item>
                    <s.Image>
                        <img src={image} alt="shoe" />
                    </s.Image>
                    <s.Info>
                        <s.Name>{ name }</s.Name>
                        <s.OldPrice>U$ { oldPrice }</s.OldPrice>
                        <s.Price>U$ { price } </s.Price>
                    </s.Info>
                </s.Item>
            </s.Carousel>
            
        </s.Container>
    )
}