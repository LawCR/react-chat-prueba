import styled from "styled-components";

// La barra de navegación transparente
export const CategoryListContainer = styled.div`
    padding: 6px;
    outline: 2px solid #211b2e;
    display: flex;
    justify-content: space-around;
    height: 40px;
`

export const CategoryListButton = styled.button`
    background-color: transparent;
    border: 1px solid #bbb;
    color: #fff;
    padding: 4px 8px 4px 8px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transform: scale(1.1,1.1);
    }
`

