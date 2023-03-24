import styled from "styled-components";
import scarlet from '../../assets/scarlet-carousel-thumb.jpg'

export const CarouselDiv = styled.div`
width: full;
height: 300px;
background-image: url(${scarlet});
background-size: cover;
display: grid;
justify-items: center;
`

export const CarouselContent = styled.div`
display: flex;
justify-content: center;
`

export const CarouselInfos = styled.div`
width: 265px;
height: 175px;
margin-top: 32px;
color: #fff;
letter-spacing: 1px;
`

export const Title = styled.h1`
font-size: 28px;
`

export const Info = styled.h2`
font-size: 24px;
margin-top: 12.4px;
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
`

export const SliderPage = styled.li`
width: 18px;
height: 5px;
background-color: #fff;
list-style: none;
`