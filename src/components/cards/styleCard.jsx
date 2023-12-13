import styled from 'styled-components'

export const Carousel = styled.div`
    display: flex;
    
`
export const Item = styled.div`
    width: 200px;
    height: 350px;
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 16px;
`
export const Image = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
`
export const Info = styled.div`
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        display: block;
        text-align: center;
        padding: 5px;
        border-radius: 10px;
    }
`
export const Name = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: #00a8fb;
    margin: 10px 0;
`
export const OldPrice = styled.span`
    font-size: 0.8rem;
    text-decoration: line-through;
    flex-grow: 1;
    color: #e81a5d;
`
export const Price = styled.span`
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #ff7e3b;
    color: #1e1e1e;
`
