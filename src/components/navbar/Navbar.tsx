import Links from "./links/Links";
import Style from "./navbar.module.css";

const Navbar = () => {
    return (

        <div className={Style.container}>
           <div>Logo</div>
           <div>
            <Links />
           </div>
        </div>
    )
}

export default Navbar;