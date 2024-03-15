import Image from 'next/image';
import styles from './home.module.css'

const Home = () => {
  
  return <div className={styles.container}>
    <div className={styles.textContainer}>
    <h1 className='text-5xl font-bold'>Imagination Unleashed: Where Creativity Finds Its Voice</h1>
      <p className={styles.desc}>Embark on a journey through Creative Chronicles, a haven where thoughts transcend into vibrant narratives. Join us in celebrating the limitless world of creative expression and let your ideas find resonance in our community of imaginative minds.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt='' fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt='' fill sizes="(max-width: 600px) 100vw, 600px"  className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;