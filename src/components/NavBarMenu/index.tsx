import './style.css'
import { House, User, Gear } from "phosphor-react";

export function NavBarMenu() {
    return(
    <>
        <nav className="navbar-menu">
            <a title="Início" href="#"><House size={40} /></a>
            <a title="Perfil" href="#"><User size={40} /></a>
            <a title="Configurações" href="#"><Gear size={40} /></a>
        </nav>
    </>
    )
}