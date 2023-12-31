import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/TopVenues">Top Venues</NavLink></li> 
        <li><NavLink to="/gallery">Gallery</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl bg-violet-600 text-white">W-Planner</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <p className="mr-2 font-bold">{user.displayName}</p> : ""
                }
                {
                    user ? <img className="w-14 h-14 rounded-full mr-1" src={user.photoURL} alt="" /> : <img src="" alt="" />
                }
                {
                    user ?
                        <button className="btn hover:bg-violet-800 bg-violet-600 border-none font-bold text-white" onClick={handleSignOut}>Sign Out</button> :
                        <Link to="/login">
                            <button className="btn hover:bg-violet-800 bg-violet-600 border-none font-bold text-white">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;