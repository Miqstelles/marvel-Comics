import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, useCart } from '../../../Redux/sliceCart';
import { debounce } from 'lodash';
import md5 from 'md5';
import axios from 'axios';
import { Navbar } from '../../Header/Navbar';
import { BtnFinalizar, Cart, CartComics, ComicCreator, ComicImg, ComicPrice, ComicTitle, RemoveComics, Title } from './style';
import { TrashSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { BtnContinuarComprando, BtnRemoverTudo, ValorTotal } from './style'

interface ComicData {
    id: string;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: 'standard_large.jpg';
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

const getComicById = async (id: string) => {
    const publicKey = '7c05f6b7e459ef60c26039c3085eeea9';
    const privateKey = '6e09d9074c633fd86c3f24bff4e736b82b42b768';
    const timeStamp = Number(new Date());
    const hash = md5(timeStamp + privateKey + publicKey);

    const response = await axios.get(`https://gateway.marvel.com/v1/public/comics/${id}`, {
        params: {
            apikey: publicKey,
            ts: timeStamp,
            hash: hash,
        },
    });

    return response.data.data.results[0];
};

export function ComicCart(props: ComicData) {
    const [comics, setComics] = useState<ComicData[]>([]);
    const items = useSelector(useCart);
    const comicIds = items.map(item => item.id);
    const [isLoaded, setIsLoaded] = useState(false);



    const fetchComicsData = async () => {
        const comics: ComicData[] = [];

        for (const id of comicIds) {
            const comicData = await getComicById(id);
            comics.push(comicData);
        }
        setComics(comics);
        setIsLoaded(true);
    };

    useEffect(() => {
        const debouncedFetchComicsData = debounce(fetchComicsData, 1000);

        if (!isLoaded) {
            debouncedFetchComicsData();
        }
    }, [comicIds, isLoaded]);

    const dispatch = useDispatch();
    const handleRemoveFromCart = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const [valortotal, setValorTotal] = useState(0);
    function removerTodasComics() {
        dispatch(clearCart());
        setComics([]);
        setValorTotal(0);
    }

    useEffect(() => {
        const total = comics.reduce((acc, comic) => acc + comic.prices[0].price, 0);
        setValorTotal(total);
    }, [comics]);


    return (
        <div>
            <Navbar />
            <Title>Carrinho de Compras</Title>
            <Cart>
                {comics.map(comic => (
                    <div key={comic.id}>
                        <CartComics>
                            <ComicImg src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} title={comic.title} alt={comic.title} />
                            <div>
                                <ComicTitle>{comic.title}</ComicTitle>
                                <ComicCreator>ESCRITOR: {comic.creators.available != 0 ? `${comic.creators.items[0].name}` : 'N/A'}</ComicCreator>
                                <div>
                                    <RemoveComics>
                                        <Link to={`/Cart`} onClick={() => handleRemoveFromCart(String(comic.id))}><TrashSimple size={32} /></Link>
                                        <ComicPrice>{comic.prices[0].price}</ComicPrice>
                                    </RemoveComics>
                                </div>
                            </div>
                        </CartComics>
                    </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                    <Link to={`/Home`}><BtnContinuarComprando>CONTINUAR COMPRANDO</BtnContinuarComprando></Link>
                    <BtnRemoverTudo onClick={removerTodasComics}>REMOVER TUDO</BtnRemoverTudo>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <ValorTotal>TOTAL: ${valortotal}</ValorTotal>
                    <BtnFinalizar>FINALIZAR</BtnFinalizar>
                </div>

            </Cart>
        </div>
    );
}