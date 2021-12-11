// rafce ==> Genera el componente
import React,{useState} from 'react'

const Header = () => {
    //estdo,funcion==>cambiara el estado de la variable
    const [darkMode,setDarkMode]=useState(false);
    const handleClick=()=>{//=>cambia el estado
        setDarkMode(!darkMode);
    }
    return (
        <div>
            <div className="Header">
                <h1>ReactHooks</h1>
                <button type="button" onClick={handleClick}>{darkMode ? "Dark Mode":"Light Mode"}</button>
            </div>
        </div>
    )
}

export default Header
