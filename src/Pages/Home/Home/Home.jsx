import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import ChefCard from "../../ChefCard/ChefCard";
import { Circles } from "react-loader-spinner";
import LatestRecipe from "../LatestRecipe/LatestRecipe";
import Subscriptions from "../Subscription/Subscriptions";

const Home = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load data from server
    useEffect(() => {
        fetch("https://foodie-frenzy-server-axuvo27-gmailcom.vercel.app/chef")
            .then((res) => res.json())
            .then((data) => {
                setChefs(data);
                setLoading(false);
            });
    }, []);
    //    Show spinner when data in loading state
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

    window.scrollTo(0, 0); //toggle to top

    return (
        <div>
            <Header></Header>
            <div className="lg:my-16 my-10">
                <h1 className="lg:text-4xl text-2xl text-center mb-4 font-medium">
                    Meet Our Chefs
                </h1>
                <p className="lg:w-[60%] w-[85%] text-center mx-auto mb-8">
                    Our chefs are passionate about creating exceptional,
                    authentic flavor systems, and their inspirations comes to
                    life in your signature dishes.
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 lg:gap-10 md:w-[70%] mx-auto lg:mx-auto gap-10 ">
                    {chefs.map((c) => (
                        <ChefCard key={c.chefId} chef={c}></ChefCard>
                    ))}
                </div>
            </div>
            <LatestRecipe></LatestRecipe>
            <Subscriptions></Subscriptions>
        </div>
    );
};

export default Home;
