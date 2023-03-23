import './style.css'
import { Button } from '../Button'
import { dados } from '../../types'

type CardListProps = {
    CardData:dados
}

export function CardsList({CardData}:CardListProps){
    const {name, email, picture} = CardData

    return(
        <>
           <div className='CardsList'>
                <img src={picture.medium} alt="" />
                <div className='CardsListInfo'>
                    <h1>{name.first}</h1>
                    <p>{email}</p>
                    <Button text='Detalhes' type='primary' />
                </div>
            </div>
            
            
            {/*
            <section className='CardsList'>
                {img}
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