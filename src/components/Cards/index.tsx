import './style.css'
// import { Button } from '../Button'

type CardsProps = {
    children: React.ReactNode; // 'children' SÃO OS FILHOS
}

export function Cards({children}:CardsProps){
    return(
        <>
        <div className='cards'>
            {children}
        </div>

        {/*
            <section className='agenda'>
                <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="" />
                <div className='agendaInfo'>
                    <h1>Nome Aqui</h1>
                    <p>Email Aqui</p>
                    <Button text='Detalhes' type='primary' />
                </div>
            </section>
        */}
        </>
    )

}