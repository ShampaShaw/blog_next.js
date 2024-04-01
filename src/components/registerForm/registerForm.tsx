"use client";

import { useFormState } from 'react-dom';
import styles from './registerForm.module.css';
import { register } from '@/lib/action';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {

    const [state,formAction] = useFormState(register,undefined);

    const router = useRouter();         //used to redirect the user to the login page after successful registration

    useEffect(() => {                  // This is a hook that is called after the component is rendered used to redirect the user to the login page after successful registration
        state?.success && router.push('/login')
    },[state?.success, router])
    
    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Confirm Password" name="confirmPassword" />
            <button type="submit">Register</button>
            {state?.error && <p>{state.error}</p>}
            <Link href="/login">
                Have an account? 
                <b>Login</b>
            </Link>
        </form>
    )
}

export default RegisterForm;