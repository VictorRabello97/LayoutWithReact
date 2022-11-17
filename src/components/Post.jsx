import { useState } from "react";
import { Avatar } from "./Avatar"
import { Comment} from "./Comment"
import styles from "./Post.module.css"



export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
        'Post muito bacana!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(publishedAt)

    function handleCreateNewComment(){
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('')
        
}

function handleNewCommentChange(){
    setNewCommentText(event.target.value)

}


    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>

                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong> {author.name}</strong>
                        <span>{author.role}</span>

                    </div>

                </div>

                <time title="11 de Maio as 8h13" dateTime="2002-05-11"> 
                {publishedDateFormated} </time>
            </header>

            <div className={styles.content}>
               {content.map(line => {
                if (line.type ==='paragraph'){
                    return <p>{line.content}</p>
                } else if (line.type === 'link'){
                    return <p> <a href="">{line.content}</a></p>
                }
                    
               })}
            </div>

                

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Deixe seu Feedback </strong>

                <textarea 
                name= 'comment'
                placeholder="Deixe um Comentario"
                value={newCommentText}
                onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit" > Publicar </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment}/>
                })}
                




            </div>

        </article>
    )
}
                



