import styled from "styled-components";

export const Cart = styled.div`
display: grid;
justify-content: center;
align-items: center;
`

export const Title = styled.h1`
font-size: 40px;
text-align: center;
@media only screen and (min-width: 760px){
    font-size: 80px;
}
`

export const CartComics = styled.div`
display: flex;
justify-content: space-between;
width: 334px; 
height: 213px;
margin-bottom: 36px;
@media only screen and (min-width: 760px){
    width: 605px; 
    height: 420px;
}
`

export const ComicImg = styled.img`
width: 160px;
height: 213px;
@media only screen and (min-width: 760px){
    width: 280px; 
    height: 420px;
}
`

export const ComicTitle = styled.div`
font-size: 20px;
width: 163px;
@media only screen and (min-width: 760px){
    font-size: 40px;
    width: 295px;
}
`

export const ComicCreator = styled.div`
font-size: 20px;
@media only screen and (min-width: 760px){
    font-size: 40px;
    width: 295px;
}
`

export const RemoveComics = styled.div`
display: flex; 
justify-content: space-between;
align-items: center; 
`

export const ComicPrice = styled.p`
font-size: 20px;
@media only screen and (min-width: 760px){
    font-size: 40px;
}
`

export const BtnContinuarComprando = styled.button`
width: 200px;
height: 38px;
background-color: #F0131E;
border-radius: 5px;
border: none;
color: #fff;
font-size: 20px;
font-family: 'Bebas Neue';
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
&:hover{
    background-color: #fff;
    border: 1px solid #000;
    color: #F0131E;
    transition: 0.6s;
}
@media only screen and (min-width: 760px){
    width: 330px;
    height: 54px;
    font-size: 40px;
}
`

export const BtnRemoverTudo = styled.button`
width: 122px;
height: 38px;
background-color: #F0131E;
border-radius: 5px;
border: none;
color: #fff;
font-size: 20px;
font-family: 'Bebas Neue';
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
&:hover{
    background-color: #fff;
    border: 1px solid #000;
    color: #F0131E;
    transition: 0.6s;
}
@media only screen and (min-width: 760px){
    width: 220px;
    height: 54px;
    font-size: 40px;
}
`

export const ValorTotal = styled.p`
font-size: 32px;
@media only screen and (min-width: 760px){
    font-size: 64px;
}
`

export const BtnFinalizar = styled.button`
width: 102px;
height: 38px;
background-color: #F0131E;
border-radius: 5px;
border: none;
color: #fff;
font-size: 20px;
font-family: 'Bebas Neue';
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
&:hover{
    background-color: #fff;
    border: 1px solid #000;
    color: #F0131E;
    transition: 0.6s;
}
@media only screen and (min-width: 760px){
    width: 159px;
    height: 54px;
    font-size: 40px;
}
`
