import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaArrowRight, FaHeart, FaThumbsUp } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    const [ratings, setRatings] = useState(3);
    const [favorite, setFavorite] = useState(
        localStorage.getItem(recipe.recipeId) === "true" // check if it's in local storage
    );
    const { imageUrl, recipeName, rating, recipeId } = recipe;

    const notifyFavorite = () => {
        toast.success("Marked as Favorite!");
    };
    const notifyUnfavorite = () => {
        toast.error("Removed from Favorite!");
    };

    const handleFavorite = () => {
        const newFavorite = !favorite;
        setFavorite(newFavorite);
        localStorage.setItem(recipeId, newFavorite); // store in local storage
        newFavorite ? notifyFavorite() : notifyUnfavorite();
    };

    return (
        <section className="bg-base-100 mb-8 shadow-md w-80 h-[460px] mx-auto relative p-4 rounded-lg">
            <LazyLoad height={288} threshold={0.95}>
                <img
                    className="h-72 w-72 mx-auto border rounded-lg"
                    src={imageUrl}
                    alt=""
                />
            </LazyLoad>
            <div className="mt-3">
                <p className="text-lg font-medium">{recipeName}</p>

                <section className="flex items-center gap-1 my-2">
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    <small className="text-slate-500 font-medium">
                        {rating}
                    </small>
                </section>

                <section className="flex absolute justify-end bottom-4 right-4 w-full">
                    <Link
                        to={`/recipe/${recipeId}`}
                        className=" border flex items-center justify-center gap-2 px-4 py-1 rounded-md font-medium hover:bg-slate-300 text-white bg-slate-700"
                    >
                        View Recipe <FaArrowRight></FaArrowRight>
                    </Link>
                </section>
                <button
                    onClick={handleFavorite}
                    disabled={favorite}
                    className="absolute -top-3 -right-3 bg-slate-100 p-1 rounded-full cursor-pointer"
                >
                    <IoHeart
                        style={{ color: !favorite ? "lightGray" : "red" }}
                        className="text-4xl"
                    ></IoHeart>
                </button>
            </div>
            <Toaster></Toaster>
        </section>
    );
};

export default RecipeCard;
