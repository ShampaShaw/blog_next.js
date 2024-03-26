import Image from 'next/image';
import style from './singlePost.module.css'

const getData = async (slug: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);  //no-cache is used to bypass the cache and force a server request for the data every time the page is loaded 

    if(!res.ok) {
        ('Something went wrong');
    }
    return res.json();
}


const SinglePost = async ({params}: any) => {
   
    const {slug} = params;

    const post = await getData(slug);
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image src="https://images.pexels.com/photos/6200867/pexels-photo-6200867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className={style.img}/>
            </div>
            <div className={style.textContainer}>
                <h1 className={style.title}>{post.title}</h1>
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
                    {post.body}
                </div>
            </div>
        </div>
    );
}

export default SinglePost;