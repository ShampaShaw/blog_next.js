"use client";

import { useFormState } from 'react-dom';
import styles from './adminUserForm.module.css';
import { addUser } from '@/lib/action';

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser,undefined);
    return (
        <form action={formAction} className={styles.container}>
            <h1>Add New User</h1>
            <input type="text" name="username" placeholder="User Name" />
            <input type='email' name='email' placeholder='Email Address' />
            <input type='password' name='password' placeholder='Password' />
            <input type='text' name='img' placeholder='Image URL' />
            <select name='isAdmin'>
                <option value='false'>Is Admin?</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
            </select>
            <button type='submit'>Add User</button>
            {state && <div>{state.error}</div>}
        </form>
    )
}

export default AdminUserForm;