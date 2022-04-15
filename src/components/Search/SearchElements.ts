import styled from "styled-components";

export const SearchDiv = styled.div`
    width:100%;
    position:relative;
    height: 2rem;
    display:flex;
    justify-content: center;
    align-items: center;
    
    
    padding: 0 8px 0 8px;
`;

export const SearchInput = styled.input`
    background:transparent;
    border: none;
    border-bottom: none;
    color:#fff ;
    padding: 0 5px 0 5px;
    outline: none;
    width: 100%;
    &:focus{
        border-radius: 20px;
        border-bottom:1px solid #bbb;
    }
`;

export const IconSearch=styled.div`
    cursor: pointer;
    height:20px;
    width:20px;
    svg{
        stroke:#555;
        &:hover{
            stroke:#aaa;
            transform:scale(1.1);
        }
    }
`

export const InputLabel=styled.label`
    display: flex;
    justify-content: space-around;
    font-size:16px;
    font-weight:bold;
    color:#fff;
`