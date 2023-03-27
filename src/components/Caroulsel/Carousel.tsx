import { CarouselDiv, CarouselContent, CarouselInfos, Info, Title, BtnComprar, SliderPaginataion, SliderPage, Arrow } from './style'
import { CaretRight } from '@phosphor-icons/react'

export function Carousel() {
    return (
        <CarouselDiv>
            <CarouselContent>
                <CarouselInfos>
                    <Title>'scarlet witch annual' #1</Title>

                    <Info>
                        Agatha Harkness Conjures Up a
                        'Contest of Chaos'
                    </Info>

                    <BtnComprar>Comprar</BtnComprar>
                </CarouselInfos>

                <Arrow><CaretRight weight='regular' size={78} /></Arrow>
            </CarouselContent>

            <SliderPaginataion>
                <SliderPage></SliderPage>
                <SliderPage></SliderPage>
                <SliderPage></SliderPage>
                <SliderPage></SliderPage>
                <SliderPage></SliderPage>
            </SliderPaginataion>
        </CarouselDiv>
    )
}