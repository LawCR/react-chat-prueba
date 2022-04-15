import styled from "styled-components";

// La barra de navegación transparente
export const UserListItemContainer = styled.div`
    padding: 5px 10px 5px 10px;
    align-items: center;
    border-bottom: 1px solid #888;
    border-radius: 20px;
    /* gap: 5px; */
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 8px 0;
    &:hover {
        background: linear-gradient(rgba(250,250,250,0.12), rgba(250,250,250,0.05) );
        opacity: 0.9;
    }
`

export const UserListItemImg = styled.img`
    height: 42px;
    width: 42px;
    border-radius: 25%;
`

export const UserListItemNameContainer = styled.div`
    width: 100%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
`

export const UserListItemName = styled.p`
    font-size: 0.95rem;  
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
// Ver reutilizable para que haga lo mismo que el componente anterior
export const UserListItemNameLight = styled.p`
    font-size: 0.7rem;
    color: green;
`

