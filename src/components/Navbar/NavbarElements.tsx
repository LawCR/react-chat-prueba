import styled from "styled-components";

interface Props {
    buttonColor?: string
}

// La barra de navegación transparente
export const Nav = styled.nav`
    /* background: #12121c; */
    background: linear-gradient(rgba(18,18,28,1), rgba(18,18,28,0.95) );
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    padding: 0 20px 0 20px;

    
`
// Los links del nav
// export const NavLink = styled(Link)`
//     color: #fff;
//     font-size: 2rem;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     cursor: pointer;
//     @media screen and (max-width: 400px) {
//        position: absolute;
//        top: 10px;
//        left: 25px;
//     }
// `
export const NavLink = styled.a`
    color: #fff;
    font-size: 1.8rem;
    font-weight: 100;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    @media screen and (max-width: 650px) {
            display: none;
    }
`
export const NavMenuGroups = styled.svg`
    display: none;
    height: 35px;
    width: 35px;
    stroke: #fff;
    background: linear-gradient(45deg, rgba(76, 57, 145,0.80), rgba(76, 57, 145,0.5) );
    padding: 4px;
    border-radius: 50%;

    @media screen and (max-width: 650px) {
        display: block;  
    }
`

export const NavMenuContainer = styled.div`
    cursor: pointer;
    color: #fff;
    font-size: 1.4rem;
    p {
        display: none;
        font-weight: 100;
        @media screen and (max-width: 650px) {
            display: block;
        }
    }
    svg {
        display: none;
        height: 35px;
        width: 35px;
        stroke: #fff;
        background: linear-gradient(45deg, rgba(76, 57, 145,0.80), rgba(76, 57, 145,0.5) );
        padding: 4px;
        border-radius: 50%;
        @media screen and (max-width: 650px) {
            display: block;
        }
    }
    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        @media screen and (max-width: 650px) {
            /* display: none; */
        }

        h2 {
            font-size: 0.8rem;
            font-weight: 100;
        }
    }

    @media screen and (max-width: 650px) {
        display: flex;
        justify-content: space-between;
        flex: 1;
    }
`

export const NavMenuUserImg = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 45%;
    margin-right: 2px;
`


export const NavInputContainer = styled.div`
   width: 45%;
   height: 30%;
   border: 1px solid white;
   padding: 10px 20px;

   display: flex;
   background: linear-gradient(rgba(18,18,28,1), rgba(18,18,28,0.95) );
   border: none;
   border-radius: 15px;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
    position: relative;
   h2 {
       text-align: center;
       font-weight: 100;
   }

   div {
       width: 100%;
   }

   @media screen and (max-width: 650px) {
        width: 100%;
        height: 30%;
    }
`
export const NavInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 8px 10px;
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

export const NavInputButton=styled.button<Props>`
    background: ${ props => props.buttonColor ? props.buttonColor  : 'linear-gradient(45deg, rgba(76, 57, 145,0.80), rgba(76, 57, 145,0.5) )' };
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

    &:disabled {
        background-color: #ffffff;
    }
`

export const NavInputButtonContainer = styled.div`
    display: flex;
    gap: 30px;
`

