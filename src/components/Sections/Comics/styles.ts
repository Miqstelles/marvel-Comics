import styled from "styled-components";

export const ComicsDiv = styled.div`
display: grid;
justify-content: center;
align-items: center;
grid-template-columns: repeat(2,1fr);
grid-gap: 48px;
@media only screen and (min-width: 760px){
    grid-template-columns: repeat(4, 0.1fr);
    grid-row-gap: 108px;
}
`
export const ComicCard = styled.div`
width: 140px;
height: 250px;
&:hover{
    transform: scale(1.1);
    transition: 0.4s;
}
@media only screen and (min-width: 760px){
    width: 260px;
    height: 480px;
}
`

export const ComicImg = styled.img`
width: 140px;
height: 200px;
@media only screen and (min-width: 760px){
    width: 280px;
    height: 360px;
}
`

export const ComicTitle = styled.h1`
font-size: 20px;
@media only screen and (min-width: 760px){
   font-size: 32px;
}
`

export const AlphabetFilter = styled.div`
width: 100%;
height: 47px;
background-color: #F0131E;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
@media only screen and (min-width: 760px){
    height: 60px;
}
`

export const AlphabetLetters = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 47px;
font-size: 20px;
color: #fff;
gap: 6px;
@media only screen and (min-width: 760px){
    height: 60px;
    font-size: 32px;
    gap: 26px;
}
`

export const Letter = styled.a`
text-decoration: none;
`

export const ButtonLetter = styled.button`
background: none;
color: inherit;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
`

export const ButtonClear = styled.button`
background: none;
color: inherit;
border: 2px solid #F0131E;
border-radius: 5px 15px;
padding: 5px;
font: inherit;
font-size: 28px;
cursor: pointer;
&:hover{
    background-color: #F0131E;
    color: #fff;
    transition: 0.6s;
}
@media only screen and (min-width: 760px){
   font-size: 56px;
   width: 175px;
   height: 82px;
   display: flex;
   justify-content: center;
   align-items: center;
}
`

export const ActivateLetter = styled.div`
color: #F0131E;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
font-size: 48px;
text-align: center;
margin-top: 36px;
margin-bottom: 36px;
@media only screen and (min-width: 760px){
   font-size: 128px;
}
`

export const PageButtons = styled.div`
display: flex;
justify-content: center;
margin-bottom: 38px;
margin-top: 40px;
gap: 24px;
@media only screen and (min-width: 760px){
   margin-top: 100px;
}
`

export const PageButton = styled.button`
border: none;
font-size: 48px;
font-family: 'Bebas Neue';
background-color: transparent;
color: #F0131E;
justify-content: center;
margin-top: 38px;
@media only screen and (min-width: 760px){
    font-size: 64px;
}
`
