import './Button.css'

type ButtonProps = {
    text?:string, // o ponto de interrogação (?) faz com que o atributo não seja obrigatorio
    type:"default" | "primary" // restringindo o uso apenas para esses dois atributos
}

export function Button(props:ButtonProps){
    return(
        <button className={`btn-${props.type}`}>{props.text}</button>
    )
}