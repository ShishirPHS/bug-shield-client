import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const NavigationBar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            icon: "success",
            title: "Log Out successful",
          });
        });
      }
    });
  };

  return (
    <header className="relative flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-[#1F2119] py-5">
      <nav
        className="container w-full mx-auto px-4 md:flex md:items-center md:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="w-[100px] md:w-[180px] h-10"
              src="https://i.ibb.co/nLYQy1B/logo.png"
              alt="website logo"
            />
          </Link>
          <div className="flex justify-end">
            <div className="block md:hidden mr-2">
              {user && (
                <div className="md:ml-10 ml-2 flex items-center">
                  <p className="text-white text-xs text-right">
                    {user?.displayName}
                  </p>
                  <div className="ml-4 h-8 w-8 rounded-full">
                    <img
                      className="h-full w-full rounded-full"
                      src={user?.photoURL}
                      alt="image of user"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-with-mega-menu"
                aria-controls="navbar-with-mega-menu"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 md:pl-5">
            <NavLink to="/" className="font-medium" aria-current="page">
              Home
            </NavLink>
            <NavLink to="/services" className="font-medium" aria-current="page">
              Services
            </NavLink>
            {user && (
              <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none]">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className="flex items-center w-full text-white hover:text-[#FFA500] font-medium dark:text-gray-400 dark:hover:text-gray-500"
                >
                  Dashboard
                  <svg
                    className="ml-2 w-2.5 h-2.5 text-white"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
                <div className="hs-dropdown-menu bg-[#1F2119] transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 z-10 md:shadow-md rounded-lg p-2 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5 hidden">
                  <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none]"></div>
                  <div className="py-2">
                    <NavLink
                      to="/myServices"
                      className="flex items-center gap-x-3.5 px-3 rounded-md text-sm text-gray-800   focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      My-services
                    </NavLink>
                  </div>
                  <div className="py-2">
                    <NavLink
                      to="/addServices"
                      className="flex items-center gap-x-3.5 px-3 rounded-md text-sm text-gray-800   focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      Add-services
                    </NavLink>
                  </div>
                  <div className="py-2">
                    <NavLink
                      to="/mySchedules"
                      className="flex items-center gap-x-3.5 px-3 rounded-md text-sm text-gray-800   focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      My-schedules
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
            {user ? (
              <a className="cursor-pointer" onClick={handleLogOut}>
                Log Out
              </a>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}

            <div className="hidden md:block">
              {user && (
                <div className="ml-10 flex items-center">
                  <p className="text-white">{user?.displayName}</p>
                  <div className="ml-4 h-10 w-10 rounded-full">
                    <img
                      className="h-full w-full rounded-full"
                      src={user?.photoURL}
                      alt="image of user"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="hidden md:block">
          {user && (
            <div className="ml-10 flex items-center">
              <p className="text-white">{user?.displayName}</p>
              <div className="ml-4 h-10 w-10 rounded-full">
                <img
                  className="h-full w-full rounded-full"
                  src={user?.photoURL}
                  alt="image of user"
                />
              </div>
            </div>
          )}
        </div> */}
      </nav>
    </header>
  );
};

export default NavigationBar;
