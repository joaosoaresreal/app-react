import React, { useState } from 'react'
import { Title } from '../../components/Title'
import './style.css'

export function StateExample() {
    // não pode-se usar dentro de outra função, não vai funcionar
    const [name, setName] = useState("") // usa-se 'const' pois não pode ser reatribuido
    
    // handle = "lide com isso"
    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }

    return (
        <>
            <Title text='State Example'/>
            <input onInput={handleInput} className='inputName' type="text" />
            <h1>{name}</h1>
        </>
    )
}