import Image from 'next/image';
import style from './contact.module.css'
// import dynamic from 'next/dynamic';

// const HydrationTestNoSSR = dynamic(() => import('@/components/hydrationTest'), {ssr: false});

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src='/contact.png' alt='' fill className={style.img}/>
      </div>
      <div className={style.formContainer}>
        {/* <HydrationTestNoSSR /> */}
        <form action="" className={style.form}>
          <input type='text' placeholder='Full Name'/>
          <input type='text' placeholder='Email Address'/>
          <input type='text' placeholder='Phone Number (Optional)'/>
          <textarea name='' id='' cols={30} rows={10} placeholder='Write Your Message'></textarea>
          <button className={style.button}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;