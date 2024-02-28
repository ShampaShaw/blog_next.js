import Link from "next/link";

const NavLink = ({item}: {item: any}) => {
    return (
        <Link href={item.path} className="min-widht-100px p-10 border-radius-20 font-weight-500 text-align-center">
            <Link href={item.path} className="text-white text-lg hover:text-gray-300">
                {item.title}
            </Link>
        </Link>
    )
}

export default NavLink;