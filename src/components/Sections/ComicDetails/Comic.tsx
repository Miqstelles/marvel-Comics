import axios from "axios";
import md5 from "md5";
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { AddCarrinho, BtnComprar, ComicCreator, ComicDesc, ComicImg, ComicInfo } from "./style";
import { Navbar } from "../../Header/Navbar";
import { ComicTitle } from "./style";
import { ComicDetails } from "./style";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, useCart } from '../../../Redux/sliceCart';

interface ResponseData {
    id: string;
    title: string;
    variantDescription: string;
    description: string;
    thumbnail: {
        path: string;
        extension: 'portrait_xlarge.jpg';
    },
    prices: {
        type: string;
        price: number;
    }[],
    creators: {
        available: Number;
        items: {
            name: string;
            role: string;
        }[],
    }
}

const publicKey = '7c05f6b7e459ef60c26039c3085eeea9'
const privateKey = '6e09d9074c633fd86c3f24bff4e736b82b42b768'

const timeStamp = Number(new Date())

const hash = md5(timeStamp + privateKey + publicKey)

export function Comic() {
    const [comics, setComic] = useState<ResponseData[]>([])
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const items = useSelector(useCart)

    useEffect(() => {
        axios
            .get(`https://gateway.marvel.com/v1/public/comics/${id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
            .then(response => {
                setComic(response.data.data.results)
            })
            .catch(err => console.log(err))
    }, []);

    function handleAddToCart() {
        dispatch(addToCart((String(id))));
    }

    return (
        <div>
            <Navbar />
            {comics.map(comic => {
                return (
                    <div key={comic.id}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ComicDetails>
                                <ComicImg src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                                <ComicDesc>
                                    <ComicTitle>{comic.title}</ComicTitle>
                                    <ComicCreator>ESCRITOR: {comic.creators.available != 0 ? `${comic.creators.items[0].name}` : 'N/A'}</ComicCreator>
                                    <ComicInfo>PREÇO: ${comic.prices[0].price} </ComicInfo>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '28px' }}>
                                        <Link to={`/Cart`} onClick={handleAddToCart}><BtnComprar>COMPRAR</BtnComprar></Link>
                                        <AddCarrinho onClick={handleAddToCart}>ADICIONAR AO CARRINHO<ShoppingCartSimple size={13} /></AddCarrinho>
                                    </div>
                                </ComicDesc>
                            </ComicDetails>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}