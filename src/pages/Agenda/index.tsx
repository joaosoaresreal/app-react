import { Button } from '../../components/Button'
import { Cards } from '../../components/Cards'
import { CardsList } from '../../components/CardsList'
import { Title } from '../../components/Title'
import './style.css'

export function Agenda() {
    return (
        <>
            <header>
                <Title text='Agenda de Contatos' />
            </header>
            <input placeholder='Localizar' className='inputLocalizar' type="text" />
            
            <Cards>
                {/*<CardsList img={<img src="https://randomuser.me/api/portraits/men/89.jpg" alt="" />} 
                nome='Nome Aqui' email='Email Aqui' botao={<Button text='Detalhes' type='primary'/>}/>*/}
                <CardsList/>
                <CardsList/>

            </Cards>



        </>
    )
}