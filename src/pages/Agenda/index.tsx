//import { Button } from '../../components/Button'
import './style.css'
//import { Title } from '../../components/Title'
import { getUsers } from '../../../services/api'
import { Cards } from '../../components/Cards'
import { CardsList } from '../../components/CardsList'
import { useEffect, useState } from 'react'
import { dados } from '../../types'
import BaseLayout from '../../layout/BaseLayout'
import { CircularProgress, TextField } from '@mui/material'

export function Agenda() {
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [users, setUsers] = useState<dados[]>([])

    const filterDados = ()=>{
        
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
            <TextField variant='outlined' />

            {isLoading ? (
                <CircularProgress />) : (
                    <Cards>
                    {
                        users.map(dados => {
                            return <CardsList key={dados.login.uuid} CardData={dados} />
                        })
                    }
                </Cards>
            )

            }


        </BaseLayout>


    )
}