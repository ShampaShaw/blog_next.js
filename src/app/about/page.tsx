import Image from "next/image";
import style from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <div className={style.imgContainer}></div>
            <Image src="https://images.pexels.com/photos/20433278/pexels-photo-20433278/free-photo-of-indian-blue-jay.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={500} height={500}/>
        </div>
    );
}

export default AboutPage;