//import { Button } from '../../components/Button'
import './style.css'
import { Title } from '../../components/Title'
import {getUsers} from '../../../services/api'
import { Cards } from '../../components/Cards'
import { CardsList } from '../../components/CardsList'
import { useEffect, useState } from 'react'
import { dados } from '../../types'

export function Agenda() {
    const[search, setSearch] = useState('')
    const[users, setUsers] = useState<dados[]>([])

    useEffect(()=>{
        async function listarUsers() {
            setUsers(await getUsers())
        }
        listarUsers()
    }, [])

    return (
        <>
            <header>
                <Title text='Agenda de Contatos' />
            </header>
            <input onInput={(event)=>setSearch(event.target.value)} placeholder='Localizar' className='inputLocalizar' type="search" />
            
            <Cards>
                {/*<CardsList img={<img src="https://randomuser.me/api/portraits/men/89.jpg" alt="" />} 
                nome='Nome Aqui' email='Email Aqui' botao={<Button text='Detalhes' type='primary'/>}/>*/}
                {
                  users.map(dados=>{
                    return <CardsList CardData={dados}/>
                  })  
                }
            </Cards>



        </>
    )
}