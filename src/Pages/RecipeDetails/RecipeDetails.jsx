import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowUp, FaStar, FaThumbsUp } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { Circles } from "react-loader-spinner";

const RecipeDetails = () => {
    const recipe = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const {
        cookingMethod,
        imageUrl,
        ingredients,
        rating,
        recipeName,
        chefId,
        recipeId,
    } = recipe;
    useEffect(() => {
        fetch(
            `https://foodie-frenzy-server-axuvo27-gmailcom.vercel.app/recipe/` //Load data from api..
        )
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        //show spinner if data in loading state.
        return (
            <div className="min-h-[90vh] w-full flex items-center justify-center">
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
    const recipeFromChef = recipes.filter((r) => r.chefId == chefId);

    window.scrollTo(0, 0); //set window position at top.

    return (
        <div className="lg:flex min-h-[91vh] lg:w-[80%] md:w-[90%] gap-20 mx-auto my-10">
            <div className="md:w-[65%] ">
                <div className="mx-auto w-[90%] md:w-full">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure className="md:w-[55%]">
                            <img
                                className="lg:h-[420px] "
                                src={imageUrl}
                                alt="Album"
                            />
                        </figure>
                        <div className="card-body space-y-10 md:w-[45%]">
                            <h2 className="card-title text-2xl">
                                {recipeName}
                            </h2>
                            <section className="flex items-end  gap-1 my-2">
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={rating}
                                    readOnly
                                />
                                <small className="text-slate-500 font-medium">
                                    {rating}
                                </small>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="p-8 ">
                    <div className="mb-4">
                        <p className="font-medium text-lg mb-2">Ingredients:</p>
                        <ul className="pl-6">
                            {ingredients.map((step, index) => (
                                <li
                                    className="list-disc text-slate-500"
                                    key={index}
                                >
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-lg mb-2">
                            Cooking Method:
                        </p>

                        <ul className="pl-6">
                            {cookingMethod.map((step, index) => (
                                <li
                                    className="list-disc text-slate-500"
                                    key={index}
                                >
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" lg:w-[30%] md:w-[95%] mx-auto">
                <p className="text-center text-lg font-semibold mb-10">
                    Some more recipes from same chef
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-1 ">
                    {recipeFromChef.map((recipe) => (
                        <div key={recipe.recipeId}>
                            <RecipeCard recipe={recipe}></RecipeCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
