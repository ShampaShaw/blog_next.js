import Links from "./links/Links";

const Navbar = () => {
    return (

        <div style={{ backgroundColor: 'rgb(7, 7, 67)' }} className='h-100 flex items-center justify-between '>
           <div className="text-30 font-bold">Logo</div>
           <div>
            <Links />
           </div>
        </div>
    )
}

export default Navbar;