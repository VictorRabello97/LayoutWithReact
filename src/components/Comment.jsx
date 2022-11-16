import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
    return (
        <div className={styles.comment}> 
        
            <Avatar hasBorder={false} src="https://github.com/ederlisboaa.png" alt="" />

            <div className={styles.commentBox}> 

            <div className={styles.commentContent}> 

            <header>

                <div className={styles.authorAndTime}> 
                    <strong>Eder Lisboa</strong>
                    <time title="11 de Maio as 8h13" dateTime="2002-05-11"> Publicado há 1h </time>
                    

                </div>

                

                <button title='Deletar Comentário'>
                    <Trash size={24} />
                </button>

            </header>

            <p>Muito bom parabéns</p>

            </div>

            <footer>

                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>

            </footer>
            
            </div>
         </div>
   )
}

            
        
         

    
            
         

         


            

            
            