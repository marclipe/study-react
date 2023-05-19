import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from "./Avatar";
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/marclipe.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcos Felipe</strong>
                            <time className={styles.time} title="25 de Abril às 08:14" dateTime="2023-04-25 08:13:30">Cerca de 1hr atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>                
                </footer>
            </div>
        </div>
    )
}