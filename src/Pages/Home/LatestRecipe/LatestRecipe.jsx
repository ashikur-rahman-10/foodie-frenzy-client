import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const LatestRecipe = () => {
    const [LatestRecipes, setLatestRecipes] = useState([]);
    // Load data from server.
    useEffect(() => {
        fetch("https://foodie-frenzy-server-axuvo27-gmailcom.vercel.app/latest")
            .then((res) => res.json())
            .then((data) => setLatestRecipes(data));
    }, []);
    return (
        <div className="my-16 lg:h-[91vh] flex items-center bg-[#F1F2F2] mx-auto">
            <div className="w-[75%] bg-[#F1F2F2] mx-auto py-10">
                <h1 className="text-center lg:text-4xl text-2xl font-medium">
                    Our Newest Recipes
                </h1>
                <p className="lg:w-[75%] w-[90%] text-center mt-8 mx-auto">
                    Step into the vibrant Latest Recipe website, located in our
                    Foodie Frenzy, where classic recipes are given a
                    contemporary twist.
                </p>
                {/* Map data and showed */}
                <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5 w-full mx-auto  mt-14">
                    {LatestRecipes.map((lr) => (
                        <div key={lr.recipeId} className="relative h-72">
                            <div className="flex flex-col justify-center items-center ">
                                <img
                                    className="rounded-full w-48 h-48"
                                    src={lr.imageUrl}
                                    alt=""
                                />
                                <h3 className="text-lg font-medium text-center my-2">
                                    {lr.recipeName}
                                </h3>

                                <div className="absolute left-[60px] lg:left-[10px] w-48 h-48 rounded-full inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center transition duration-300 opacity-0 hover:opacity-100">
                                    <Link
                                        to={`/recipe/${lr.recipeId}`}
                                        className="inline-block bg-white text-gray-900 py-2 px-4 rounded-full font-medium transition duration-300 hover:bg-gray-900 hover:text-white"
                                    >
                                        View Recipe{" "}
                                        <FaArrowRight className="inline-block ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestRecipe;
