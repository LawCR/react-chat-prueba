import styled from "styled-components";

interface Props {
    mobile: boolean
}

export const GroupListDiv=styled.div<Props>`
    padding: 10px;
    height:calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 650px) {
        display: ${props => props.mobile ? 'block' : 'none'} ;
        width: 100%;
        height: 100%;
        padding: 10px;
    }
`

export const GroupListHeader=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
`

export const GroupInput=styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 8px;
    background-color: #211a2b;
    border-radius: 10px;
    color:#fff ;
    outline:none;
    border-bottom:none;
    margin-bottom:10px;
    &:focus{
        opacity: 0.5;
        border-bottom:1px solid #ccc;
    }
`
export const GroupInputSelect=styled.select`
    width: 100%;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 8px;
    background-color: #211a2b;
    border-radius: 10px;
    color:#fff ;
    outline:none;
    border-bottom:none;
    margin-bottom:10px;
    &:focus{
        opacity: 0.5;
        border-bottom:1px solid #ccc;
    }
`
export const GroupInputButton=styled.button`
    background: linear-gradient(45deg, rgba(76, 57, 145,0.80), rgba(76, 57, 145,0.5) );
    border: none;
    color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    padding: 8px 0;
    width: 100%;
    transition: all 0.2s ease-in;
    &:hover{
        opacity: 0.5;
    }
`

export const GroupTitle=styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
    font-weight:lighter;
    color:#fff;
`

export const IconPlus=styled.div`
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
        transform:scale(1.3);
    }
`

export const GroupListItemContainer=styled.div`
    width: 100%;
    height: calc(100% - 2rem);
    overflow-y: auto;

    @media screen and (max-width: 650px) {
        height: calc(100% - 2rem);
        max-height: calc(100% - (calc(2rem + 160px)));
    }
`

