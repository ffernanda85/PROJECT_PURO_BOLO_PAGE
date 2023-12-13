import styled from 'styled-components'

export const Container = styled.div`
    max-width: 75vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        display: none;
    }
`
export const ContainerButtons = styled.div`
    width: 100%;
    text-align: center;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`
export const LeftButton = styled.button`
    transform: rotate(180deg);
`
export const RightButton = styled.button`
    
`