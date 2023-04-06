//import { Button } from '../../components/Button'
//import './style.css'
//import { Title } from '../../components/Title'
import { getUsers } from '../../../services/api'
import { Cards } from '../../components/Cards'
import { CardsList } from '../../components/CardsList'
import { ChangeEvent, useEffect, useState } from 'react'
import { dados } from '../../types'
import BaseLayout from '../../layout/BaseLayout'
import { CircularProgress, TextField } from '@mui/material'

export function Agenda() {
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [users, setUsers] = useState<dados[]>([])

    {/*
        const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
            setSearch(event.target.value)
        }
    */}

    const filterDados = (dados:dados)=>{
        return dados.name.first.toLowerCase().includes(search.toLowerCase()) // LowerCase --> TRANSFORMA TUDO EM MINUSCULO
    }

    useEffect(() => {
        async function listarUsers() {
            setIsLoading(true)
            setUsers(await getUsers())
            setIsLoading(false)
        }
        listarUsers()
    }, [])

    return (

        <BaseLayout appBarTitle='Agenda'>
            <TextField onChange={(e)=> setSearch(e.target.value)} value={search} variant='outlined' label="Pesquisar" fullWidth />

            {isLoading ? (
                <CircularProgress />) : (
                    <Cards>
                    {
                        users.filter(filterDados).map(dados => {
                            return <CardsList key={dados.login.uuid} CardData={dados} />
                        })
                    }
                </Cards>
            )

            }


        </BaseLayout>


    )
}