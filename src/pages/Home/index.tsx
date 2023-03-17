import { AddressBook, ImageSquare } from "phosphor-react";
import { Link } from 'react-router-dom'
import { Menu } from "../../components/Menu";
import { MenuItem } from "../../components/MenuItem";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";

export function Home() {
    return (
        <>
            <header>
                <Title text="Bem Vindo" />
            </header>
            <main>
                {/*
                <div className="action-buttons">
                    <Button text="Login" type='primary' />
                    <Button text="Cadastrar" type='default' />
                </div> 
                */}
                <Menu> {/*PARA CADA ITEM DE MENU VOU CHAMAR O MENU ITEM, QUE NÃO TERÁ FILHOS*/}
                    <Link to='/agenda'>
                        <MenuItem icon={<AddressBook size={25} />} text="Agenda" />
                    </Link>

                    <Link to='/gallery'> {/*PAG QUE VAI CARREGAR DEFINIDA NA HOME*/}
                        <MenuItem icon={<ImageSquare size={25} />} text="Galeria" />
                    </Link>
                </Menu>


            </main>
        </>
    )
}