import { ShoppingCartSimple, MagnifyingGlass } from "@phosphor-icons/react"
import { Img, Navb, Ul } from "./style"
import logo from "../../assets/logo.png"

export function Navbar() {
    return (
        <Navb>
            <Ul>
                <li style={{ marginTop: '5px' }}><ShoppingCartSimple size={32} color={'#fff'} /></li>
                <li><Img src={logo} alt="Marvel Logo" /></li>
                <li style={{ marginTop: '5px' }}><MagnifyingGlass size={32} color={'#fff'} /></li>
            </Ul>
        </Navb>
    )
}