import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-[url(https://i.ibb.co/tD2txtb/error-page.png)]">
      <div className="container mx-auto flex items-center justify-center">
        <Link className="mt-20" to="/">
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
