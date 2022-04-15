import styled from "styled-components";

// La barra de navegación transparente
export const UserPageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    height: calc(100vh - 68px);

    @media screen and (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`