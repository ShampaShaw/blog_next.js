import Link from "next/link";
import NavLink from "./navLink/navLink";

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

    return (
        <div className="flex items-center gap-10">
            {Links.map((link) => (
                <NavLink item={link} key={link.title}/>
            ))}
        </div>
    );
}

export default Links;