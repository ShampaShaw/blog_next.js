import style from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterPage;