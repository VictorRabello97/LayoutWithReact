import styles from'./Header.module.css'
import NodeIcon from '../assets/nodejs-icon.svg'
import ReactIcon from '../assets/react-2.svg'


export function Header(){
    return (

        
        <header className={styles.header} >

            <img src={NodeIcon}/>

            <img src={ReactIcon}/>
            <strong>Portifólio</strong>
        </header>
        
    
    ) 
}



           