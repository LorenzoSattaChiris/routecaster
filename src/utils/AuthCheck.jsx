import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.host.startsWith("app.")) {
            const timer = setTimeout(() => {
            const rootHost = window.location.host.replace("app.", "");
            window.location.href = `${window.location.protocol}//${rootHost}/login`;
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                if (window.location.pathname !== "/login") {
                    navigate("/login");
                }
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [navigate]);

    return (
        <>
            <div>You are not Logged In - Redirecting to Login Page...</div>
            <div>Redirecting...</div>
        </>
    );
};

export default AuthCheck;