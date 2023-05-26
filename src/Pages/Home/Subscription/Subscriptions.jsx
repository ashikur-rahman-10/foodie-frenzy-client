import React from "react";

const Subscriptions = () => {
    return (
        <div className="flex flex-col my-28 items-center">
            <div className="md:w-[60%] w-[85%] h-96 flex items-center  rounded-xl bg-base-100 shadow-xl">
                <div className="flex flex-col md:flex-row  lg:gap-10 p-4 gap-4 lg:p-10 mx-auto">
                    <div className="lg:w-[30%] mx-auto">
                        <img
                            className=" h-40 lg:h-[300px] mx-auto rounded-xl"
                            src="https://whisk.com/wp-content/uploads/2021/05/hero-recipes-1.jpg"
                        />
                    </div>
                    <div className=" flex lg:w-[70%] justify-center mx-auto items-center gap-4 lg:gap-10 flex-col">
                        <h2 className="text-center lg:text-3xl text-xl">
                            Get our latest recipes and expert tips right in your
                            inbox
                        </h2>
                        <p className="font-medium text-xs">
                            It will charged $1.99/month
                        </p>
                        <div className="">
                            <label className="input-group">
                                <input
                                    type="text"
                                    placeholder="....@gmail.com"
                                    className="border py-2 px-2 w-40 lg:w-48 input-bordered"
                                />
                                <span className="bg-[#FF0000] cursor-pointer text-white font-medium">
                                    Subscribe
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;
