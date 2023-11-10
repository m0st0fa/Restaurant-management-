

const Navbar = () => {
    const nav =
        <>
            <li><a>Home</a></li>
            <li><a>Contact</a></li>
        </>
    return (
        <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 bg-blue-300 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-success">Login</a>
            </div>
        </div>
    );
};

export default Navbar;