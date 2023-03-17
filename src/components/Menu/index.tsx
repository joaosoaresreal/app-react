import './style.css'

type MenuProps = {
    children: React.ReactNode; // 'children' SÃO OS FILHOS
}

export function Menu({children}:MenuProps){ // CODIGO DESESTRUTURADO, SE USAR COMO OBJETO: props:MenuProps
    return(
        <>
            <div className="menu">
                {/*{props.children} ISSO É UM OBJETO
                COM A DESESTRUTURAÇÃO FICA DESTA MANEIRA:*/}
                {children}
            </div>
        </>
    )
}