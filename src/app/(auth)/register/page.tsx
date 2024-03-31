import { register } from "@/lib/action";
import style from "./register.module.css";

const RegisterPage = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <form className={style.form} action={register}>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="email" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;