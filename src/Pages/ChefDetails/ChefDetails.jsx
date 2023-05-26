import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { FaThumbsUp } from "react-icons/fa";
import { Circles, CirclesWithBar } from "react-loader-spinner";

const ChefDetails = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const recipes = useLoaderData();
    // console.log(recipes);
    useEffect(() => {
        fetch("https://foodie-frenzy-server-axuvo27-gmailcom.vercel.app/chef")
            .then((res) => res.json())
            .then((data) => {
                setChefs(data);
                setLoading(false);
            });
    }, []);
    window.scrollTo(0, 0);

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

    const chef = chefs.find((c) => c.chefId == id);
    const {
        chefId,
        chefPicture,
        chefName,
        yearsOfExperience,
        numberOfRecipes,
        chefBio,
        likes,
    } = chef;
    console.log();
    return (
        <div className=" min-h-[91vh]">
            <div className="card lg:card-side md:w-[69%] w-[90%] my-16 mx-auto bg-base-100 shadow-xl">
                <figure className="md:w-[40%]">
                    <img src={chefPicture} alt="Album" />
                </figure>
                <div className="space-y-5 p-8 md:w-[60%]">
                    <h2 className="card-title">{chefName}</h2>
                    <p>{chefBio}</p>
                    <p>Experience: {yearsOfExperience} years</p>
                    <p>Number of Recipes: {numberOfRecipes}</p>
                    <section className="flex gap-1 my-2">
                        <FaThumbsUp className="text-slate-500 hover:text-red-500"></FaThumbsUp>
                        <small className="text-slate-500 font-medium">
                            {likes}
                        </small>
                    </section>
                </div>
            </div>
            <h1 className="lg:text-3xl text-xl text-center font-medium mb-6">
                Recipes by :{chefName}
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 lg:gap-10 md:w-[70%] mx-auto mb-28 lg:mx-auto gap-10 ">
                {recipes.map((r) => (
                    <RecipeCard key={r.recipeId} recipe={r}></RecipeCard>
                ))}
            </div>
        </div>
    );
};

export default ChefDetails;
