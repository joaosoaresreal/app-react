import './style.css'
import React from 'react'
import { Button } from '../Button'

/*
type CardListProps = {
    img: string,
    nome: string,
    email: string,
    botao: React.ReactNode
}
*/

export function CardsList(/*{img, nome, email, botao}:CardListProps*/){
    return(
        <>
            
           <section className='CardsList'>
                <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="" />
                <div className='CardsListInfo'>
                    <h1>Nome Aqui</h1>
                    <p>Email Aqui</p>
                    <Button text='Detalhes' type='primary' />
                </div>
            </section>
            
            {/*
            <section className='CardsList'>
                <div className='CardsListImagem'>
                    {img}
                </div>
                <div className='CardsListInfo'>
                    <h1>{nome}</h1>
                    <p>{email}</p>
                    {botao}
                </div>

            </section>
            */}
        </>
    )
}