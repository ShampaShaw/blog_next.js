import Image from 'next/image';
import style from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src="https://images.pexels.com/photos/6200867/pexels-photo-6200867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className={style.img}/>
            
        </div>
        <span className={style.date}>15.03.2014</span>
      </div>
      <div className={style.bottom}>
        <h1 className={style.title}>Title</h1>
        <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis diam, fermentum vel nisl at, euismod consectetur urna. Nullam sed ante at lectus malesuada sagittis. Vestibulum nulla felis, egestas sed arcu ut, dignissim sagittis nisl. Sed a dui leo. Quisque sit amet interdum purus. Sed non ultrices enim, blandit feugiat enim. </p>
        <Link className={style.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
}

export default PostCard;
