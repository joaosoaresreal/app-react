import { Cards } from '../../components/Cards'
import { Title } from '../../components/Title'
import './style.css'

export function Agenda() {
    return (
        <>
            <header>
                <Title text='Agenda de Contatos' />
            </header>

            <input placeholder='Localizar' className='inputLocalizar' type="text" />
            
            <Cards/>
            <Cards/>



        </>
    )
}