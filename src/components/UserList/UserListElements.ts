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

export const UserListTitleContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    padding: 0 5px;
`

export const UserListTitle=styled.h2`
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 100;
    color: #ddd;
`

export const IconRefresh=styled.div`
    width:20px;
    height:20px;
    & svg{
        transition: all 0.3s ease-in-out;
    }
    &:hover{
        cursor:pointer;
        background:#151555;
    }
    &:hover svg{
        transform:scale(1.1,1.1);
    }
`

export const UserListItemContainer = styled.div`
    padding: 0 8px;
    width: 100%;
    height: calc(100% - 2rem);
    overflow-y: auto;

    @media screen and (max-width: 650px) {
        height: calc(100% - 4rem);
    }
`