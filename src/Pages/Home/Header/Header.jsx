import React from "react";
import "./Header.css";
const Header = () => {
    return (
        <div className="header flex flex-1">
            <div className="w-[40%] lg:ml-20 h-full">
                <img
                    className=" md:h-[600px]  h-48 mt-3 md:absolute mx-auto lg:ml-44 ml-10 md:bottom-0"
                    src="https://raw.githubusercontent.com/ashikur-rahman-10/dummy-data/main/chef-1.png"
                    alt="chef"
                />
            </div>
            <div className="w-[60%] flex items-center justify-center flex-col ">
                <img
                    className="md:w-36 w-12"
                    src="https://raw.githubusercontent.com/ashikur-rahman-10/dummy-data/main/yckrdB8di.png"
                    alt=""
                />
                <div className="text-center text-yellow-400 font-bold flex items-center justify-center lg:gap-8 flex-col">
                    <h1 className="md:text-8xl text-3xl">It's Cooking Time!</h1>
                    <h2 className="md:text-5xl text-xl">With</h2>
                    <h2 className="md:text-7xl text-2xl">Foodie Frenzy</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;
