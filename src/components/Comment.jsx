import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, deleteComment}){

    const [likeCount, setLikeCount]= useState(0);

    function handleDeleteComment(){
        console.log('deletar')

        deleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }




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

                

                <button onClick={handleDeleteComment} title='Deletar Comentário'>
                    <Trash size={24} />
                </button>

            </header>

            <p> {content} </p>

            </div>

            <footer>

                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Curtir <span>{likeCount}</span>
                </button>

            </footer>
            
            </div>
         </div>
   )
}
            
        
         

    
            
         

         


            

            
            