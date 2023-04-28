import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { Comment } from "./components/Comment";

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <aside>
          <Post
            author="MarcLipe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati incidunt quam vero cupiditate saepe odio, quasi illum omnis."
          />
          <Post author="Felipe Sousa" content="Um novo post muito legal" />
        </aside>
        <main></main>
      </div>
    </div>
  );
}
