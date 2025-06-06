import * as styles from './DiscountCard.css';
import type { DiscountPerformance } from '../../api/types';
import TimeDeal from '@/pages/Main/components/TimeDeal/TimeDeal';

interface DiscountCardProps extends DiscountPerformance {
  onClick?: () => void;
}

const DiscountCard = ({
  title,
  discountRate,
  price,
  imageUrl,
  location,
  startDate,
  endDate,
  description,
  dealTime,
  onClick,
}: DiscountCardProps) => {
  return (
    <div className={styles.discountCard} onClick={onClick}>
      <img src={imageUrl} className={styles.cardImg} alt={title} />
      <div className={styles.cardContent}>
        <TimeDeal text="타임딜" time={dealTime} />
        <h3 className={styles.discoutTitle}>{title}</h3>
        <p className={styles.locationtxt}>{location}</p>
        <p className={styles.dateTxt}>
          {startDate} ~ {endDate}
        </p>
        <p className={styles.descriptionTxt}>{description}</p>
        <div className={styles.priceDisplay}>
          <p className={styles.discoutNum}>{discountRate}%</p>

          <p className={styles.priceNum}>{price.toLocaleString()}원</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
