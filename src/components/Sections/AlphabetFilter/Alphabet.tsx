import { AlphabetFilter, AlphabetLetters, Letter } from "./style";

export function Alphabet() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    return (
        <AlphabetFilter>
            <AlphabetLetters>
                {alphabet.map(alphabet => {
                    return (
                        <p title={alphabet}><Letter href="">{alphabet}</Letter></p>
                    )
                })}
            </AlphabetLetters>
        </AlphabetFilter>
    )
}