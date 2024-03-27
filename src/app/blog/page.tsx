import style from './blog.module.css';
import PostCard from '@/components/postCard/postCard';
import { getPosts } from '@/lib/data';


//FETCH DATA FROM API
// const getData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate:3600}});  //no-cache is used to bypass the cache and force a server request for the data every time the page is loaded 

//     if(!res.ok) {
//         ('Something went wrong');
//     }
//     return res.json();
// }

const BlogPage = async () => {

    //const posts = await getData();

    const posts = await getPosts();

    return (
        <div className={style.container}>
            {posts.map((post: any) => (
                <div className={style.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
}

export default BlogPage;

