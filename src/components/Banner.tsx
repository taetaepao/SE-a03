import styles from './banner.module.css';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={'/img/cover.jpg'}
        alt={'cover'}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.bannerText}>
        <h1 >where every event finds its venue</h1>
        <h3> เราพร้อมให้บริการสถานที่จัดเลี้ยงสำหรับทุกโอกาสสำคัญของคุณ </h3>
      </div>
    </div>
  );
}
