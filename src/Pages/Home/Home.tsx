import { Carousel } from "../../components/Caroulsel/Carousel";
import { Navbar } from "../../components/Header/Navbar";
import { Comics } from "../../components/Sections/Comics/Comics";

export function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Comics />
        </div>
    )
}