"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useEffect } from "react";

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);

    // useEffect(() => {                  // This is a hook that is called after the component is rendered used to redirect the user to the login page after successful registration
    //     state?.success && router.push('/')
    // },[state?.success, router])

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            {state?.error && <p>{state.error}</p>}
            <Link href="/register">
                {"Don't have an account?"} <b>Register</b>
            </Link>
        </form>
    );
};

export default LoginForm;