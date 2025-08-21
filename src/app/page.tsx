import Image from "next/image";
import styles from "./page.module.css";
import Banner from '@/components/Banner';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ display: 'flex', justifyContent: 'center' , padding: '20px' 
        ,  gap: '20px', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Card/>
      </div>
    </main>
  );
}
