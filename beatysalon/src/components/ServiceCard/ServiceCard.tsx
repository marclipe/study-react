import styles from './ServiceCard.module.css'

interface ServiceCardProps {
	image: string
	title: string
	description: string
}

export function ServiceCard({image, title, description}: ServiceCardProps) {
  return (
    <div className={styles.service_card}>
      <div className={styles.image__card}>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3 className={styles.title__card}>{title}</h3>
        <p className={styles.description__card}>{description}</p>
      </div>
    </div>
  );
}