import axios from "axios";
import md5 from "md5";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { AddCarrinho, BtnComprar } from "./style";
import { Navbar } from "../../Header/Navbar";
import { ComicTitle } from "./style";
import { ComicDetails } from "./style";
import { ShoppingCartSimple } from "@phosphor-icons/react";

interface ResponseData {
    id: string;
    title: string;
    variantDescription: string;
    description: string;
    thumbnail: {
        path: string;
        extension: 'portrait_xlarge.jpg';
    },
    pageCount: number;
    dates: {
        type: string;
        date: string;
    },
    prices: {
        type: string;
        price: number;
    }[],
    creators: {
        items: {
            name: string;
            role: string;
        }
    },
    urls: {
        type: string;
        url: string;
    }
}

const publicKey = '82b123107b3f347612d1c147238d3ef7'
const privateKey = '437ceec8c6a4281606011b114656643fa8ba8e5f'

const timeStamp = Number(new Date())

const hash = md5(timeStamp + privateKey + publicKey)


export function Comic() {
    const [comics, setComic] = useState<ResponseData[]>([])
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        axios
            .get(`http://gateway.marvel.com/v1/public/comics/${id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
            .then(response => {
                setComic(response.data.data.results)
                console.log(response.data.data.results)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div style={{}}>
            <Navbar />
            {comics.map(comic => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ComicDetails>
                            <div style={{ width: '328px' }}><ComicTitle>{comic.title}</ComicTitle></div>
                            <p>{comic.creators.items.name}</p>
                            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} width={328} height={440} />
                            <div style={{ width: '328px' }}><p>{comic.description}</p></div>
                            <p style={{ fontSize: '24px', color: '#F0131E' }}>PREÇO: ${comic.prices[0].price} </p>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '28px' }}>
                                <BtnComprar>COMPRAR</BtnComprar>
                                <AddCarrinho>ADICIONAR AO CARRINHO<ShoppingCartSimple size={20} /></AddCarrinho>
                            </div>
                        </ComicDetails>
                    </div>
                )
            })}
        </div>
    )
}