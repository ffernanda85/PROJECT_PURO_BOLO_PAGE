import styled from 'styled-components'

export const ContainerHeader = styled.header`
    background-color: #e5dbd0;
    width: 100vw;
    height: 18vh;
    color: #5b3a30;
`
export const MenuContainer = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-family: 'Whisper', cursive;
    font-weight: bolder;
    cursor: pointer;
    
    img {
        width: 95px;
        mix-blend-mode: multiply;
    }
`

export const Title = styled.p`
    font-size: 2.5rem;
    line-height: 15px;
`
export const NavMenu = styled.nav`
     
`
export const ItemContainer = styled.ul`
    display: flex;
    gap: 2rem;
`
export const Item = styled.li`
    list-style-type: none;
    font-size: 1.5rem;
    cursor: pointer;
`