import { get } from 'http'
import style from './postUser.module.css'
import { getUser } from '@/lib/data';

//FETCH DATA FROM API
// const getData = async (userId: number) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"});  //no-cache is used to bypass the cache and force a server request for the data every time the page is loaded 

//     if(!res.ok) {
//         ('Something went wrong');
//     }
//     return res.json();
// }

const PostUser = async({userId}: { userId: number }) => {

        //const user = await getData(userId);
        const user = await getUser(userId);
    return (
        <div className={style.container}>
                <span className={style.title}>Author</span>
                {user && <span className={style.username}>{user.username}</span>}
        </div>
    )
}

export default PostUser