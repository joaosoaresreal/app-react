import { useState } from 'react'
import { movies } from './../../../services/filmes'
import './style.css'
// import { SkipForwardCircle, SkipBackCircle } from "phosphor-react";
//import { Button } from '../Button';
import { Title } from '../Title';
import Button from '@mui/material/Button'

export function GalleryList() {
    const [number, setNumber] = useState(0)
    let movie = movies[number]

    // const [movie, setMovie] = useState(movies[number])

    function next() {
        if (number <= movies.length - 2) { // USAR O .length (-2 pq ele começa a contar o 0 quando está no 1)
            setNumber(number + 1)
        } else {
            setNumber(0)
        }
    }

    function previous() {
        if (number <= 0) {
            setNumber(movies.length - 1)
        } else (
            setNumber(number - 1)
        )
    }

    return (
        <>

            <header className='headerGaleria'>
                <Title text='Galeria' />
            </header>

            <main>
                <div className='title'>
                    <h1>{movie.title}</h1>
                </div>

                <div className="galleryList">
                    <img src={movie.images.poster} />
                </div>
                
                <div className='info'>
                    {/*<h2><span>Sinopse: </span>{movie.synopsis}</h2>*/}
                    {/*<p><HourglassMedium size={32} /> {movie.duration}</p>*/}
                </div>

                <div className='botao'>
                <Button variant="contained" onClick={previous}>ANTERIOR</Button>
                <Button variant="contained" onClick={next}>PROXIMO</Button>
                    {/*<button onClick={previous}><SkipBackCircle size={15} />Anterior</button>
                    <button onClick={next}>Próximo<SkipForwardCircle size={15} /></button> */}
                </div>
            </main>
        </>
    )
}