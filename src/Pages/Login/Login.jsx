import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
    const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    // set location for navigate
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    const navigate = useNavigate();
    // Toaster
    const notifySuccess = () => {
        toast.success("User login Successfully!");
    };
    const notifyError = (message) => {
        toast.error(message);
    };
    // handle Login by email and password
    const handleLogin = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                event.target.reset();
                setSuccess("User created Successfully");
                notifySuccess();
                navigate(from, { replace: true });
                setError("");
            })
            .catch((error) => {
                setSuccess("");
                setError(error.message);
                notifyError(error.message);
            });
    };

    window.scrollTo(0, 0); // Toggle to top

    // handle Google login
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setSuccess("User login Successfully");
                setError("");
                navigate(from, { replace: true });
                notifySuccess();
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
                navigate(from, { replace: true });
                notifySuccess();
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
                onSubmit={handleLogin}
                className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
                <div className="card-body">
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
                        <label className="label">
                            <Link
                                href="#"
                                className="label-text-alt link link-hover"
                            >
                                Forgot password?
                            </Link>
                        </label>
                    </div>
                    <div className="form-control mt-1">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                    <span>
                        <small className="text-red-600">{error}</small>
                        <small className="text-lime-600">{success}</small>
                    </span>
                    <hr className="mt-4" />
                    <small className="text-center mt-1">or login with</small>
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
                        Dont’t Have An Account?{" "}
                        <Link to={"/register"}>Register</Link>
                    </small>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default Login;
