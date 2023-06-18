import styles from '../CarouselCard/CarouselCard.module.css'

interface CarouselCardProps {
    description: string;
    image: string;
    name: string;
}

export function CarouselCard({ description, image, name}: CarouselCardProps) {
    return (
      <div className={styles.card}>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.card__item}>
					<img className={styles.card__photo} src={image} alt={name} />
					<p className={styles.card__name}>{name}</p>
				</div>
      </div>
    );
}