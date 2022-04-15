import styled from "styled-components"


export const GroupListElement=styled.div`
    padding: 5px 10px 5px 10px;
    border-bottom: 1px solid #888;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
    width: 100%;
    cursor:pointer;
    &:hover{
        background: linear-gradient(rgba(250,250,250,0.12), rgba(250,250,250,0.05) );
        opacity: 0.9;
    }
`

export const GroupListImage=styled.img`
    width: 42px;
    height: 42px;
    border-radius: 25%;
`

export const GroupListName=styled.p`
    text-align: center;
    font-size: 0.95rem;  
    width: 100%;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const GroupListIconContainer=styled.div`
    display: flex;
    align-items: center;
    
    svg {
        height: 23px;
        width: 23px;
        stroke: #A11010;
        &:hover {
            stroke: #BF1D1D;
            transform: scale(1.2,1.2);
        }
    }
`