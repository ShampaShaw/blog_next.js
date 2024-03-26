import Image from 'next/image';
import style from './singlePost.module.css'

const SinglePost = ({params}: any) => {
    console.log(params)
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image src="https://images.pexels.com/photos/6200867/pexels-photo-6200867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className={style.img}/>
            </div>
            <div className={style.textContainer}>
                <h1 className={style.title}>Title</h1>
                <div className={style.detail}>
                    <Image 
                        src="https://images.pexels.com/photos/6200867/pexels-photo-6200867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt=''
                        width={50}
                        height={50}  
                        className={style.avatar}/>
                    <div className={style.detailText}>
                        <span className={style.detailTitle}>Author</span>
                        <span className={style.detailValue}>Shampa Shaw</span>
                    </div>
                    <div className={style.detailText}>
                        <span className={style.detailTitle}>Published</span>
                        <span className={style.detailValue}>15.03.24</span>
                    </div>
                </div>
                <div className={style.content}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
            </div>
        </div>
    );
}

export default SinglePost;