import Image from "next/image";
import style from "./about.module.css";

export const metadata = {
    title: "About Page",
    description: "About description",
  };
  

const AboutPage = () => {
    return (
        <div className={style.container}>
           <div className={style.textContainer}>
            <h2 className={style.subtitle}>About Agency</h2>
            <h1 className={style.title}>Creative Chronicles: Nurturing imagination, uniting creators in a boundless haven.</h1>
            <p className={style.desc}>Welcome to Creative Chronicles, a sanctuary for imaginative minds where thoughts transform into vibrant narratives. Our mission is to celebrate and foster creativity in all its forms, providing a dynamic platform for writers, artists, and visionaries to connect, collaborate, and explore the limitless possibilities of creative expression. At Creative Chronicles, we embrace diversity, encouraging everyone to share their unique voice and contribute to our vibrant community. Whether you're a seasoned creator or just beginning your creative journey, join us in unlocking the full spectrum of imagination. Together, let's weave a tapestry of stories and ideas that resonate with the pulse of our shared creativity.</p>
            <div className={style.boxes}>
                <div className={style.box}>
                    <h1 className="font-bold text-2xl">10 K+</h1>
                    <p>Year of Experience</p>
                </div>
                <div className={style.box}>
                    <h1 className="font-bold text-2xl">10 K+</h1>
                    <p>Year of Experience</p>
                </div>
                <div className={style.box}>
                    <h1 className="font-bold text-2xl">10 K+</h1>
                    <p>Year of Experience</p>
                </div>
            </div>
           </div>
           <div className={style.imgContainer}>
            <Image 
                src="/about.png"
                alt="Picture of About"
                fill
                className={style.img}
            />
           </div>
        </div>
    );
}

export default AboutPage;