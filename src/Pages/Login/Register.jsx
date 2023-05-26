import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
    const { createUser, googleSignIn, githubSignIn, updateUserProfile } =
        useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // set loaction to navigate
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    const navigate = useNavigate();
    // Set toaster
    const notifySuccess = () => {
        toast.success("User login Successfully!");
    };
    const notifyError = (message) => {
        toast.error(message);
    };
    // Handle Register user by Email and password
    const handleRegister = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                if (user) {
                    updateUserProfile(name, photo)
                        .then(() => {
                            console.log("Profile updated successfully");
                        })
                        .catch((error) => {
                            console.log("Error updating profile:", error);
                        });
                }
                event.target.reset();
                setSuccess("User created Successfully");
                setError("");
                notifySuccess();

                navigate("/login", { replace: true });
            })
            .catch((error) => {
                setSuccess("");
                notifyError(error.message);
                setError(error.message);
            });
    };

    window.scrollTo(0, 0); //toogle to top

    // Handle Google login
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setSuccess("User login Successfully");
                setError("");
                notifySuccess();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setSuccess("");
                setError(error.message);
                notifyError(error.message);
            });
    };
    // Handle github login
    const handleGithub = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                setSuccess("User login Successfully");
                setError("");
                notifySuccess();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setSuccess("");
                setError(error.message);
                notifyError(error.message);
            });
    };

    return (
        <div className="w-full min-h-[91vh] flex items-center justify-center">
            <form
                onSubmit={handleRegister}
                className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            required
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Photo Url"
                            name="photo"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="password"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-1">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                    <span>
                        <small className="text-red-600">{error}</small>
                        <small className="text-lime-600">{success}</small>
                    </span>
                    <hr className="mt-4" />
                    <small className="text-center mt-1">or register with</small>
                    <div className="flex items-center justify-center gap-5 mb-5">
                        <FaGoogle
                            onClick={handleGoogle}
                            className="text-2xl text-[#4285F4]"
                        ></FaGoogle>
                        <FaGithub
                            onClick={handleGithub}
                            className="text-2xl"
                        ></FaGithub>
                    </div>

                    <small className="text-center">
                        Already Have An Account?{" "}
                        <Link to={"/login"}>Login</Link>
                    </small>
                </div>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;
