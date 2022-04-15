import styled from "styled-components";

interface Props {
    showMenu: boolean;
}

export const MenuContainer = styled.div<Props>`
    background: linear-gradient(rgba(21,17,34,0.99), rgba(21,17,34,0.98) );
    opacity: ${props => props.showMenu ? 1 : 0};
    visibility: ${props => props.showMenu ? 'visible' : 'hidden'};
    height: 100vh;
    position: absolute;
    top: 0;
    width: 75%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;

    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    @media screen and (min-width: 650px) {
        display: none;  
    }
`

export const MenuContainerCerrar = styled.p`
    color: red;
    cursor: pointer;
    position: absolute;
    top: 40px;
    right: 40px;
    height: 40px;
    width: 40px;

    svg {
        stroke: #346ca4;
    }
`
export const MenuContainerUl = styled.div`
    display: flex;
    color: #346ca4;
    height: 50%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 100%;
`

export const MenuContainerLi = styled.div`
    cursor: pointer;
    padding: 5px;
    border-radius: 10px;
    font-size: 1.5rem;
    width: 80%;
    background-color: #161d2e;

    &:hover {
        background-color: #161d4d;
    }
    &:focus {
        background-color: #161d4c;
    }
`