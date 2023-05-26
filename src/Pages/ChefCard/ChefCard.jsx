import React from "react";
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
    const {
        chefPicture,
        chefId,
        numberOfRecipes,
        chefName,
        yearsOfExperience,
        likes,
    } = chef;
    // console.log(chef);
    return (
        <section className="bg-base-100 shadow-md w-80 mx-auto p-4 rounded-lg">
            <LazyLoad height={288} threshold={0.95}>
                <img
                    className="h-72 w-72 mx-auto border rounded-lg"
                    src={chefPicture}
                    alt=""
                />
            </LazyLoad>
            <div className="mt-3">
                <p className="text-lg font-medium">{chefName}</p>
                <p className="text-slate-500">
                    Experience: {yearsOfExperience} years
                </p>
                <p className="text-slate-500">
                    Number of recipes: {numberOfRecipes}
                </p>
                <section className="flex gap-1 my-2">
                    <FaThumbsUp className="text-slate-500 hover:text-red-500"></FaThumbsUp>
                    <small className="text-slate-500 font-medium">
                        {likes}
                    </small>
                </section>

                <section className="flex justify-end w-full">
                    <Link
                        to={`/chef/${chefId}`}
                        className=" border flex items-center justify-center gap-2 px-4 py-1 rounded-md font-medium hover:bg-slate-700 hover:text-white bg-slate-300"
                    >
                        View Recipes <FaArrowRight></FaArrowRight>
                    </Link>
                </section>
            </div>
        </section>
    );
};

export default ChefCard;
