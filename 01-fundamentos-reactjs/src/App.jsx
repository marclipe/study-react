import { Post } from "./Post"
import { Header } from "./components/Header";
import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="MarcLipe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati incidunt quam vero cupiditate saepe odio, quasi illum omnis."
      />
      <Post 
        author="Felipe Sousa" 
        content="Um novo post muito legal" 
      />
    </div>
  );
}
