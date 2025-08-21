import styles from './card.module.css';
import Image from 'next/image';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={'/img/card.jpg'} alt='card' fill style={{ objectFit: "cover" }}/>
      </div>
      <div className={styles.cardtext}>
        <h2 className={styles.title}>บริการสถานที่จัดเลี้ยง</h2>
        <p className={styles.description}>พื้นที่กว้างขวาง พร้อมสิ่งอำนวยความสะดวกครบครันสำหรับงานแต่ง งานเลี้ยง และการประชุม</p>
      </div>
    </div>
  );
}
