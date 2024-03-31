import Links from "./links/Links";
import Link from "next/link";
import Style from "./navbar.module.css";
import { auth } from "@/lib/auth";

const Navbar = async () => {
    const session = await auth();
    console.log(session)
    return (

        <div className={Style.container}>
           <Link href='/' className={Style.logo}>Logo</Link>
           <div>
            <Links session={session}/>
           </div>
        </div>
    )
}

export default Navbar;