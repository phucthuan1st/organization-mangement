import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Leftbar from "./components/shared/Leftbar";
import Navbar from "./components/shared/Navbar";
import { setInitialAuthState } from "./redux/actions/authActions";

const PrivateRoute = ({ userData }) => {
    const isAuthenticated = useMemo(() => {
        return (userData, accessToken) => {
            return userData && accessToken;
        };
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("profile");
    const accessToken = JSON.parse(token)?.accessToken;

    const currentUserIsModerator = userData?.role === "moderator";

    useEffect(() => {
        if (!isAuthenticated(userData, accessToken)) {
            dispatch(setInitialAuthState(navigate));
        }
    }, [dispatch, navigate, userData, accessToken, isAuthenticated]);

    const [showLeftbar, setShowLeftbar] = useState(false);

    const toggleLeftbar = () => {
        setShowLeftbar(!showLeftbar);
    };

    return isAuthenticated(userData, accessToken) ? (
        <div className="scroll-smooth">
            <Navbar
                userData={userData}
                toggleLeftbar={toggleLeftbar}
                showLeftbar={showLeftbar}
            />

            <div className="md:mx-auto md:grid md:w-10/12 md:grid-cols-4 md:gap-6">
                <Leftbar showLeftbar={showLeftbar} />

                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/signin" />
    );
};

export default PrivateRoute;