import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";

import {
    FaBars,
    FaMixer,
    FaSignInAlt,
    FaUserAlt,
    FaUserCircle,
} from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

import { Circles } from "react-loader-spinner";
const NavigationBar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    // console.log(user);
    const [open, setOpen] = useState(true);
    const handleLogout = () => {
        logOut().then().catch();
    };

    if (loading) {
        return (
            <div className="min-h-[90vh] w-full flex  items-center justify-center">
                <Circles
                    height="80"
                    width="80"
                    color="gray"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }
    return (
        <section className="navbar-container bg-base-200">
            <div className="navbar">
                <div onClick={() => setOpen(!open)} className="hamburger">
                    <span>
                        {open === true ? (
                            <FaBars></FaBars>
                        ) : (
                            <FaMixer></FaMixer>
                        )}
                    </span>
                </div>
                <NavLink
                    className="text-2xl font-medium text-slate-500"
                    to={"/"}
                >
                    Foodie Frenzy
                </NavLink>
                <div className={`navs ${open ? "_navs" : "navs"}`}>
                    <NavLink className="nav text-slate-400" to={"/home"}>
                        Home
                    </NavLink>
                    <NavLink className="nav text-slate-400" to={"/blog"}>
                        Blog
                    </NavLink>
                    <NavLink className="nav text-slate-400" to={"/about"}>
                        About
                    </NavLink>
                </div>
                <div>
                    {user ? (
                        <span className="flex items-center justify-center gap-4">
                            {user?.photoURL && (
                                <div
                                    className="tooltip tooltip-bottom"
                                    data-tip={user?.displayName}
                                >
                                    <img
                                        className="w-9 h-9 rounded-full border-none"
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                </div>
                            )}
                            {!user.photoURL && (
                                <div
                                    className="tooltip tooltip-bottom"
                                    data-tip={user?.displayName}
                                >
                                    <FaUserCircle className="w-7 h-7 rounded-full border-none"></FaUserCircle>
                                </div>
                            )}
                            <Link
                                className="text-red-600"
                                onClick={handleLogout}
                            >
                                Log out
                            </Link>
                        </span>
                    ) : (
                        <NavLink className="text-sky-600" to={"/login"}>
                            login
                        </NavLink>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NavigationBar;
