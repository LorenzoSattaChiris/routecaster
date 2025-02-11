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
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-300">
          You are not logged in!
        </h1>
        <p className="text-lg mb-4 text-gray-200">
          Redirecting to the Login Page...
        </p>
        {/* <p className="text-md text-gray-400">
          If you are not redirected automatically, please click the{" "}
          <a
            href="/login"
            className="font-bold text-indigo-500 hover:underline cursor-pointer"
          >
            login link
          </a>
          .
        </p> */}
      </div>
    </div>
  );
};

export default AuthCheck;
