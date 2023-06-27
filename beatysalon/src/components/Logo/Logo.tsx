import styles from "./Logo.module.css";

export function Logo(){
    return (
      <p className={styles.logo}>
        beauty<span className={styles.colorSalon}>salon</span>.
      </p>
    );
}