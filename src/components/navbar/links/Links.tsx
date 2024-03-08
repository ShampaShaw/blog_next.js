"use client";
import NavLink from "./navLink/navLink";
import Style from "./links.module.css";
import { useState } from "react";

const links = [
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

const Links = () => {
    const [open, setOpen] = useState(false);

    const session = true;
    const isAdmin = true;

    return (
        <div className={Style.container}>
            <div className={Style.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}/>
                ))}{session ? (
                    <>
                        {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
                        <button className={`${Style.container} ${Style.active}`}> Logout </button>
                    </>
            
                ) : (
                        <NavLink item={{title: "Login", path: "/login"}}/>
                )}
            </div>
            <button className={`${Style.menuButton} ${Style.active}`} onClick={()=>setOpen((prev) => !prev)}>Menu</button>
            {
                open && (
                    <div className={Style.mobileLinks}>
                        {links.map((link) => (
                            <NavLink item={link} key={link.title}/>
                        ))}{session ? (
                            <>
                                {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
                                <button className={`${Style.container} ${Style.active}`}> Logout </button>
                            </>
                    
                        ) : (
                                <NavLink item={{title: "Login", path: "/login"}}/>
                        )}
                    </div>
                )
            }
        </div>
    );
}

export default Links;