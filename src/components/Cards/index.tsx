import './style.css'
import { Button } from '../Button'

export function Cards(){

    return(
        <>
            <section className='agenda'>
                <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="" />
                <div className='agendaInfo'>
                    <h1>Nome Aqui</h1>
                    <p>Email Aqui</p>
                    <Button text='Detalhes' type='primary' />
                </div>
            </section>
        </>
    )

}