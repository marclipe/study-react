import styles from "./Logo.module.css";

export function Logo(){
    return (
      <div>
        beauty<span className={styles.colorSalon}>salon</span>.
      </div>
    );
}