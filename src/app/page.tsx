import Image from 'next/image';
import styles from './home.module.css'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Imagination Unleashed: Where Creativity Finds Its Voice</h1>
      <p>Embark on a journey through Creative Chronicles, a haven where thoughts transcend into vibrant narratives. Join us in celebrating the limitless world of creative expression and let your ideas find resonance in our community of imaginative minds.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brand}>
        <Image src="/brands.png" alt='' fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt='' fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;