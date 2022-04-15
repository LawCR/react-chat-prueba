import styled from "styled-components";

interface Props {
    mobile: boolean
}

export const UserListContainer = styled.div<Props>`
    outline: 2px solid #211b3e;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:calc(100vh - 100px);

    @media screen and (max-width: 650px) {
        display: ${props => props.mobile ? 'block' : 'none'} ;
        width: 100%;
        height: 100%;
        padding: 10px;
    }
`

export const UserListTitle=styled.h1`
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
    font-weight: lighter;
    color: #fff;
`

export const UserListItemContainer = styled.div`
    padding: 0 8px;
    width: 100%;
    height: calc(100% - 2rem);
    overflow-y: auto;
`