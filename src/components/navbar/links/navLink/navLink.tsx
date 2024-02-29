// my-server-component.js

// @ts-ignore
// @use-client

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./navLink.module.css"; // Import the style module

const NavLink = ({item}: {item: any}) => {
    const pathName = usePathname();
    
    return (
        <Link href={item.path} className={`${style.container} ${pathName === item.path && style.active}`}> {/* Use the style module */}
            {item.title}
        </Link>
    )
}

export default NavLink;