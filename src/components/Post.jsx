import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post(){
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>

                    <Avatar src="https://github.com/VictorRabello97.png" />
                    <div className={styles.authorInfo}>
                        <strong> Victor Rabello </strong>
                        <span>Web Developer</span>

                    </div>

                </div>

                <time title="11 de Maio as 8h13" dateTime="2002-05-11"> Publicado há 1h </time>
            </header>

            <div className={styles.content}>
                <p> Fala Galera </p>
                <p>Estou desenvolvendo meus conhecimentos em React!! </p>
                <p><a href=""> https:/github.com/victorrabello97</a></p>
                <p>
                    <a href="">#EmBuscaDaPrimeiraOportunidade</a>{'   '}
                    <a href="">#DesenvolvedorJunior</a>{'  '}
                    <a href="">#Back-End/FullStack</a>{'  '}
                </p>
            </div>

                

            <form className={styles.commentForm}>
                <strong> Deixe seu Feedback </strong>

                <textarea 
                placeholder="Deixe um Comentario"
                />

                <footer>
                    <button type="submit" > Publicar </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                




            </div>

        </article>
    )
}

export function Posttwo(){
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>

                    <Avatar src="https://github.com/VictorRabello97.png" />
                    <div className={styles.authorInfo}>
                        <strong> Victor Rabello </strong>
                        <span>Web Developer</span>

                    </div>

                </div>

                <time title="11 de Maio as 8h13" dateTime="2002-05-11"> Publicado há 1h </time>
            </header>

            <div className={styles.content}>
                <p> Eae galera do Linkedin</p>
                <p>Abaixo vou deixar o link de uma API 100% Integrada</p>
                <p><a href=""> https://drive.google.com/file/d/1lME0ekjX1obev3i3ndjebNHOG4JC-6VQ/view?usp=sharing</a></p>
                <p>
                    <a href="">#DevJunior</a>{'   '}
                    <a href="">CursoRocketSeet</a>{'  '}
                </p>
            </div>

                

            <form className={styles.commentForm}>
                <strong> Deixe seu Feedback </strong>

                <textarea 
                placeholder="Deixe um Comentario"
                />

                <footer>
                    <button type="submit" > Publicar </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                




            </div>

        </article>
    )
}