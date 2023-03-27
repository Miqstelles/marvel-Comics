import styled from "styled-components";

export const ComicDetails = styled.div`
width: 334px;
color: #F0131E;
margin-top: 48px;
@media only screen and (min-width: 760px){
    width: 933px;
    height: 660px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
}
`
export const ComicImg = styled.img`
width: 328px;
height: 440px;
@media only screen and (min-width: 760px){
    display: grid;
    justify-content: center;
    align-items: center;
    width: 440px;
    height: 450px;
}
`

export const ComicTitle = styled.h1`
color: #000;
font-size: 32px;
text-align: center;
@media only screen and (min-width: 760px){
    font-size: 44px;
    text-align: left;
    width: 440px;
}
`

export const ComicDesc = styled.div`
@media only screen and (min-width: 760px){
    width: 443px;
    margin-left: 53px;
}
`

export const ComicCreator = styled.p`
margin-left: 40px;
font-size: 20px;
@media only screen and (min-width: 760px){
    font-size: 40px;
    margin-left:0px;
}
`

export const ComicInfo = styled.p`
width: 164px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;

@media only screen and (min-width: 760px){
    font-size: 40px;
    width: 164px;
    display: inline;
}
`

export const BtnComprar = styled.button`
width: 110px;
height: 41px;
border: 2px solid #F0131E;
border-radius: 5px 15px;
background-color: transparent;
color: #F0131E;
font-size: 20px;
font-family: 'Bebas Neue';

margin-bottom: 30px;
&:hover{
    background-color: #F0131E;
    color: #fff;
    transition: 0.6s;
}
@media only screen and (min-width: 760px){
    font-size: 28px;
    width: 180px;
    height: 40px;
    margin-top: 30px;
}
`

export const AddCarrinho = styled.button`
width: 185px;
height: 41px;
border: 2px solid #F0131E;
border-radius: 5px 15px;
background-color: transparent;
color: #F0131E;
font-size: 20px;
font-family: 'Bebas Neue';
margin-bottom: 30px;
&:hover{
    background-color: #F0131E;
    color: #fff;
    transition: 0.6s;
}
@media only screen and (min-width: 760px){
    font-size: 28px;
    width: 280px;
    height: 40px;
    gap: 5px;
    margin-top: 30px;
}
`