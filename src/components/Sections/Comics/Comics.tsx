import axios from "axios";
import md5 from "md5";
import { useEffect, useState } from "react";
import { ActivateLetter, AlphabetFilter, AlphabetLetters, ButtonClear, ButtonLetter, ComicCard, ComicImg, ComicsDiv, ComicTitle, PageButton, PageButtons } from "./styles";
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

const publicKey = '7c05f6b7e459ef60c26039c3085eeea9'
const privateKey = '6e09d9074c633fd86c3f24bff4e736b82b42b768'

const timeStamp = Number(new Date())

const hash = md5(timeStamp + privateKey + publicKey)

export function Comics() {
    const [comics, setComic] = useState<ResponseData[]>([])

    const [itemsData, setItemsData] = useState<ResponseData[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(8);
    const [selectedPage, setSelectedPage] = useState<number>(currentPage);

    const [activeLetter, setActiveLetter] = useState<string>("");

    useEffect(() => {
        axios
            .get(`https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
            .then(response => {
                setComic(response.data.data.results)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        const filteredItems = activeLetter ? comics.filter(comic => comic.title.startsWith(activeLetter)) : comics;
        setItemsData(filteredItems);
        setCurrentPage(1);
    }, [activeLetter, comics]);

    const handleLetterClick = (letter: string) => {
        setActiveLetter(letter);
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = itemsData.slice(firstIndex, lastIndex);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(itemsData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <AlphabetFilter>
                <AlphabetLetters>
                    {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
                        letter => (
                            <ButtonLetter title={letter} key={letter} onClick={() => handleLetterClick(letter)}>
                                {letter}
                            </ButtonLetter>
                        )
                    )}

                </AlphabetLetters>
            </AlphabetFilter>
            <ActivateLetter>{activeLetter} {activeLetter ? <ButtonClear onClick={() => setActiveLetter("")}>LIMPAR</ButtonClear> : null}</ActivateLetter>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <ComicsDiv>
                    {currentItems.map(comic => {
                        return (
                            <div key={comic.id}>
                                <ComicCard>
                                    <Link title={comic.title} to={`/ComicDetails/${comic.id}`}  ><ComicImg src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} /></Link>
                                    <ComicTitle>{comic.title}</ComicTitle>
                                </ComicCard>
                            </div>
                        )
                    })}
                </ComicsDiv>
            </div>
            <PageButtons>
                {pageNumbers.map(number => (
                    <PageButton
                        key={number}
                        onClick={() => {
                            handlePageClick(number);
                            setSelectedPage(number);
                        }}
                        disabled={currentPage === number}
                        style={selectedPage === number ? { backgroundColor: '#F0131E', color: '#fff', borderRadius: '5px' } : {}}
                    >
                        {number}
                    </PageButton>
                ))}
            </PageButtons>
        </div >
    )

}