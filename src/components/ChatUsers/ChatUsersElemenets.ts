import styled from "styled-components";

// La barra de navegación transparente
export const ChatUsersContainer = styled.div`
    height: 100%;
    outline: 2px solid #211b3e;

    /* @media screen and (max-width: 650px) {
        grid-row: 1/2;
    } */
`
export const ChatUsersNameContainer = styled.div`
    height: 40px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(21,17,40,1), rgba(21,17,40,0.98) );
    padding: 10px;

    h2{
        font-size: 1.1rem;
        font-weight: 100;
    }
`

export const ChatUsersDivContainer = styled.div`
    display: flex;
    padding: 10px 0 10px 0;
    flex-direction: column;
    justify-content: space-around;
    height: calc(100vh - 148px);
`

export const ChatUsersDivMessageContainer = styled.div`
    height: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: flex-end; */

    /* height: 100%; */
    /* height: calc(100% - 108px); */
    
    overflow-y: auto;

    .chatDivMessagex {
        /* minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent:'flex-end' */
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
`



export const ChatUsersDivMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 5px 10px 5px 20px;
    &:hover {
        opacity: 0.9;
    }
`

export const ChatUsersImg = styled.img`
    height: 28px;
    width: 28px;
    border-radius: 50%;
    align-self: flex-start;
`

export const ChatUsersName = styled.p`
    /* background-color: #4c3991; */
    background: linear-gradient(45deg, rgba(76, 57, 145,0.80), rgba(76, 57, 145,0.5) );
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: lighter;
    padding: 5px 10px 5px 10px;
    width: 80%;
`

export const ChatUsersDivText = styled.div`
    display: flex;
`

export const ChatUserTextarea = styled.textarea`
    background-color: #211a2b;
    border: none;
    border-bottom: 1px solid #aaa;
    border-radius: 10px;
    color: #bbb;
    padding: 5px 10px 5px 10px;
    margin: 5px 10px 5px 30px;
    width: 80%;
    resize: none;
    outline: none;

    &:focus {
        opacity: 0.6;
    }
    &:hover {
        opacity: 0.9;
    }
`
export const ChatUserButton = styled.button`
    margin: 5px 10px 5px 5px;
    border: none;
    border-radius: 5px 50px 50px 5px;
    width: 60px;
    background: linear-gradient(45deg, rgba(76, 57, 145,0.80), rgba(76, 57, 145,0.5) );
    color: #ccc;
    cursor: pointer;
    transform: scale(0.8,0.8);

    &:hover {
        opacity: 0.9;
    }
`
