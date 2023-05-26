import React from "react";
import "./NotFound.css";
const NotFound = () => {
    return (
        <div className="NotFound">
            <img
                className="lg:w-[30%] w-[70%]"
                src="https://raw.githubusercontent.com/ashikur-rahman-10/dummy-data/main/pngegg.png"
                alt=""
            />
            <button
                className="text-[#7e90fe] bg-slate-100 px-3 py-2 rounded-lg hover:text-blue-700"
                onClick={() => window.history.back()}
            >
                Go Back
            </button>
        </div>
    );
};

export default NotFound;
