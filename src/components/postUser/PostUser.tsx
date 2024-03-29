import { get } from 'http'
import style from './postUser.module.css'
import { getUser } from '@/lib/data';
import Image from 'next/image';

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
            <Image className={style.avatar} src={user.img ? user.img : '/noavatar.png'} alt='' width={50} height={50}/>
            <div className={style.texts}>
                <span className={style.title}>Author</span>
                <span className={style.username}>{user.username}</span>
            </div> 
        </div>
    )
}

export default PostUser