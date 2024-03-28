import Image from 'next/image';
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/PostUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

//FETCH DATA FROM API
// const getData = async (slug: string) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);  //no-cache is used to bypass the cache and force a server request for the data every time the page is loaded 

//     if(!res.ok) {
//         ('Something went wrong');
//     }
//     return res.json();
// }


const SinglePost = async ({params}: any) => {
    const { slug } = params;

  // FETCH DATA WITH AN API
  //const post = await getPost(slug);
  

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
  console.log("singlePost:",post)

  return (
    <div className={styles.container}>
      {post?.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {/* {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )} */}
          <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>15.03.24</span>
            </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePost;
