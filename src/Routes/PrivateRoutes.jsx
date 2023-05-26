import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);
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

    if (user) {
        return children;
    }
    return (
        <Navigate
            state={{ from: location }}
            to={"/login"}
            replace:true
        ></Navigate>
    );
};

export default PrivateRoutes;
