import styles from '../components/Post.module.css'

export function Post() {
    return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://avatars.githubusercontent.com/u/86076983?v=4"
            />
            <div className={styles.authorInfo}>Marcos Felipe</div>
            <span>Web Developer</span>
          </div>

          <time title="25 de Abril às 08:14" dateTime="2023-04-25 08:13:30">
            Publicado há 1hr
          </time>
        </header>
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>👉 <a href="#">jane.design/doctorcare</a></p>
          <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
        </div>
      </article>
    );
}