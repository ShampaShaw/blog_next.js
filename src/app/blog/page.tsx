import style from './blog.module.css';
import PostCard from '@/components/postCard/postCard';

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!res.ok) {
        ('Something went wrong');
    }
    return res.json();
}

const BlogPage = async () => {

    const posts = await getData();

    return (
        <div className={style.container}>
            {posts.map((post: any) =>( // Explicitly defining the type of 'post' as 'any'
                <div className={style.post} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}
            
        </div>
    );
}

export default BlogPage;
