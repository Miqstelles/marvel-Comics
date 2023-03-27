import styled from "styled-components";
import scarlet from '../../assets/scarlet-carousel-thumb.jpg'

export const CarouselDiv = styled.div`
width: full;
height: 300px;
background-image: url(${scarlet});
background-size: cover;
display: grid;
justify-items: center;
@media only screen and (min-width: 760px){
    height: 442px;
    background-size: cover;
    background-repeat: no-repeat;
}
`

export const CarouselContent = styled.div`
display: flex;
justify-content: center;
@media only screen and (min-width: 760px){
   gap: 580px;
}
`

export const CarouselInfos = styled.div`
width: 265px;
height: 175px;
margin-top: 32px;
color: #fff;
letter-spacing: 1px;
@media only screen and (min-width: 760px){
    width: 463px;
    height: 175px;
}
`

export const Title = styled.h1`
font-size: 28px;
@media only screen and (min-width: 760px){
    margin-top: 14px;
    font-size: 48px;
}
`

export const Info = styled.h2`
font-size: 24px;
margin-top: 12.4px;
@media only screen and (min-width: 760px){
    font-size: 44px;
}
`

export const BtnComprar = styled.button`
width: 118px;
height: 41px;
border: 1px solid #FFFFFF;
border-radius: 50px 25px;
background-color: transparent;
color: #fff;
font-size: 20px;
font-family: 'Bebas Neue';
&:hover{
    background-color: #fff;
    color: #000;
    transition: 0.6s;
}
@media only screen and (min-width: 760px){
    width: 286px;
    height: 66px;
    font-size: 40px;
    margin-top: 40px;
}
`

export const Arrow = styled.div`
margin-top: 126px;
color: #fff;
width: 48px;
height: 48px;
@media only screen and (min-width: 760px){
  margin-top: 193px;
}
`

export const SliderPaginataion = styled.ul`
width: 102px;
height: 7px;
gap: 8px;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
margin-top: 55px;
@media only screen and (min-width: 760px){
    width: 250px;
    height: 7px;
    gap: 20px;
    margin-top: 160px;
}
`

export const SliderPage = styled.li`
width: 18px;
height: 5px;
background-color: #fff;
list-style: none;
@media only screen and (min-width: 760px){
    width: 32px;
    height: 8px;
}
`

