import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Oops! Page not found</p>

      <p className="text-gray-500 mt-2">
        {error?.statusText || "The page you are looking for does not exist."}
      </p>

      <Link to="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
