import Image from 'next/image';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Assuming you're using Font Awesome icons
import style from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src="https://images.pexels.com/photos/6200867/pexels-photo-6200867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className={style.img}/>
          <div className={style.icons}>
            <FaEdit/>
            <FaTrash />
          </div>
            
        </div>
        <span className={style.date}>15.03.2014</span>
      </div>
      <div className={style.bottom}>
        <h1 className={style.title}>Title</h1>
        <p className={style.desc}>Desc</p>
        <Link className={style.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
}

export default PostCard;
