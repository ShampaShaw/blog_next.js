import Link from "next/link";
import NavLink from "./navLink/navLink";
import Style from "./links.module.css";

const Links = () => {
    const Links = [
        {
            id: 1,
            title: "Home",
            path: "/",
        },
        {
            id: 2,
            title: "About",
            path: "/about",
        },
        {
            id: 3,
            title: "Contact",
            path: "/contact",
        },
        {
            id: 4,
            title: "Blog",
            path: "/blog",
        }
    ];

    const session = true;
    const isAdmin = true;

    

    return (
        <div className={Style.links}>
            {Links.map((link) => (
                <NavLink item={link} key={link.title}/>
            ))}{session ? (
                <>
                    {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
                    <button className={Style.logout}> Logout </button>
                </>
                
            ) : (
                    <NavLink item={{title: "Login", path: "/login"}}/>
            )}
        </div>
    );
}

export default Links;