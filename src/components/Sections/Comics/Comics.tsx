import axios from "axios";
import md5 from "md5";
import { useEffect, useState } from "react";
import { Alphabet } from "../AlphabetFilter/Alphabet";
import { ComicCard, ComicsDiv, ComicTitle } from "./styles";
import { Link } from 'react-router-dom';

export interface ResponseData {
    id: string;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: 'portrait_xlarge.jpg';
    }
}

const publicKey = '82b123107b3f347612d1c147238d3ef7'
const privateKey = '437ceec8c6a4281606011b114656643fa8ba8e5f'

const timeStamp = Number(new Date())

const hash = md5(timeStamp + privateKey + publicKey)

export function Comics() {
    const [comics, setComic] = useState<ResponseData[]>([])

    useEffect(() => {
        axios
            .get(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
            .then(response => {
                setComic(response.data.data.results)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Alphabet />
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <ComicsDiv>
                    {comics.map(comic => {
                        return (
                            <ComicCard>
                                <Link title={comic.title} to={`/ComicCart/${comic.id}`}  ><img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} width={140} height={200} /></Link>
                                <ComicTitle>{comic.title}</ComicTitle>
                            </ComicCard>
                        )
                    })}
                </ComicsDiv>
            </div>
        </div >
    )

}