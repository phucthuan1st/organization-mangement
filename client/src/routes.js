import { lazy } from "react";

import Home from "./pages/Dashboard";
import Profile from "./pages/Profile";

const Moderator = lazy(() => import("./pages/Moderator"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const EmailVerifiedMessage = lazy(() => import("./pages/EmailVerifiedMessage"));
const LoginVerified = lazy(() => import("./pages/LoginVerified"));
const AccessDenied = lazy(() => import("./pages/AccessDenied"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const privateRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
];

export const publicRoutes = [
    {
        path: "/auth/verify",
        element: <VerifyEmail />,
    },
    {
        path: "/email-verified",
        element: <EmailVerifiedMessage />,
    },
    {
        path: "/verify-login",
        element: <LoginVerified />,
    },
    {
        path: "/access-denied",
        element: <AccessDenied />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];