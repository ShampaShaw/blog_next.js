"use client";

import { useFormState } from 'react-dom';
import styles from './adminPostForm.module.css';
import { addPost } from '@/lib/action';

const AdminPostForm = ({userId}: {userId: any}) => {
    const [state, formAction] = useFormState(addPost,undefined);
    return (
        <form action={formAction} className={styles.container}>
            <h1>Add New Post</h1>
            <input type="hidden" name="userId" value={userId} />
            <input type="text" name="title" placeholder="Title" />
            <input type='text' name='slug' placeholder='Slug' />
            <input type='text' name='img' placeholder='Image URL' />
            <textarea name='desc' placeholder='Description' rows={10} />
            <button type='submit'>Add Post</button>
            {state && <div>{state.error}</div>}
        </form>
    )
}

export default AdminPostForm;