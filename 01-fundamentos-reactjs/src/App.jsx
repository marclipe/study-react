import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'
import './global.css'

//author: {avartar_url: "", name: "", role: ""}
//publishedAt: Date
//content: string

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/marclipe.png",
      nome: "MarcLipe",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      { type: "link", content: "marc.design/programmer" },
    ],
    publishedAt: new Date("2023-05-04 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/marclipe.png",
      nome: "Marcs Felipe",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      { type: "link", content: "marc.design/programmer" },
    ],
    publishedAt: new Date("2023-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
