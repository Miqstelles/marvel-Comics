import { ShoppingCartSimple, MagnifyingGlass } from "@phosphor-icons/react"
import { Img, Navb, Ul } from "./style"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <Navb>
            <Ul>
                <Link to={`/Cart`}><li style={{ marginTop: '5px' }}><ShoppingCartSimple size={32} color={'#fff'} /></li></Link>
                <Link to={`/Home`}> <li><Img src={logo} alt="Marvel Logo" /></li></Link>
                <li style={{ marginTop: '5px' }}><MagnifyingGlass size={32} color={'#fff'} /></li>
            </Ul>
        </Navb>
    )
}