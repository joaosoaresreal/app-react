//import { useState } from 'react'
//import { movies } from './data'
//import './style.css'
//import { SkipForwardCircle, SkipBackCircle, HourglassMedium} from "phosphor-react";

type GalleryProps = {
    children: React.ReactNode; // 'children' SÃO OS FILHOS
}

export function Gallery({children}:GalleryProps) {

    return(
        <div className='gallery'>
            {children}
        </div>
    )

    /* 
    const [number, setNumber] = useState(0)
    let movie = movies[number]

    // const [movie, setMovie] = useState(movies[number])

    function next(){
        if(number <= movies.length-2){ // USAR O .length (-2 pq ele começa a contar o 0 quando está no 1)
            setNumber(number + 1)
        } else{
            setNumber(0)
        }
    }

    function previous(){
        if(number <= 0){
            setNumber(movies.length-1)
        } else(
            setNumber(number - 1)
        )
    }

    return (
        <>
            <div className='title'>
                <h1>{movie.title}</h1>
            </div>
            <section className="gallery">
                <img src={movie.images.poster} />
                <div className='info'>
                    <h2><span>Sinopse: </span>{movie.synopsis}</h2>
                    <p><HourglassMedium size={32} /> {movie.duration}</p> 
                </div>
            </section>

            <div className='botao'>
                <button onClick={previous}><SkipBackCircle size={35} />Anterior</button>
                <button onClick={next}>Próximo<SkipForwardCircle size={35} /></button>
            </div>

        </>
        )
    */
}