import './style.css'

type MenuItemProps = {
    icon: React.ReactNode, // VAI SER UM COMPONENTE TBM, POR ISSO 'React.ReactNode'
    text: String
}

export function MenuItem({icon, text}: MenuItemProps){
    return(
        <>
            <button className="menuItem">
                {icon} {text}
            </button>
            
        </>
    )
}