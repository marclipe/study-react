import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";

export function Header() {
    return (
        
      <><Logo />
      <div>
            <ul className={styles.container}>
                <li>
                    <a href="#">Início</a>
                </li>
                <li>
                    <a href="#">Sobre</a>
                </li>
                <li>
                    <a href="#">Serviços</a>
                </li>
                <li>
                    <a href="#">Depoimentos</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </div></>
    );
}