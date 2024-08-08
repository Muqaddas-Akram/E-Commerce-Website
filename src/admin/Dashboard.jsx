import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        aria-controls="default-sidebar"
        aria-expanded={isSidebarOpen}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-sky-500 rounded-lg sm:hidden hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:text-sky-400 dark:hover:bg-sky-700 dark:focus:ring-sky-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-sky-50 bg-gradient-to-r from-sky-200 to-sky-300">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/admin"
                className="flex items-center p-2 text-sky-900 rounded-lg dark:text-white hover:bg-sky-100 dark:hover:bg-sky-700 group"
              >
                <svg
                  className="w-5 h-5 text-sky-500 transition duration-75 dark:text-sky-400 group-hover:text-sky-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manage-payments"
                className="flex items-center p-2 text-sky-900 rounded-lg dark:text-white hover:bg-sky-100 dark:hover:bg-sky-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-sky-500 transition duration-75 dark:text-sky-400 group-hover:text-sky-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Manage Payments
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manage-orders"
                className="flex items-center p-2 text-sky-900 rounded-lg dark:text-white hover:bg-sky-100 dark:hover:bg-sky-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-sky-500 transition duration-75 dark:text-sky-400 group-hover:text-sky-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Manage Orders</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-sky-500 bg-sky-200 rounded-full dark:bg-sky-900 dark:text-sky-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manage-users"
                className="flex items-center p-2 text-sky-900 rounded-lg dark:text-white hover:bg-sky-100 dark:hover:bg-sky-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-sky-500 transition duration-75 dark:text-sky-400 group-hover:text-sky-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 12h-4v-1.5a4.5 4.5 0 0 0-9 0V12H5a1 1 0 0 0-.865 1.5L12 21l7.865-6.5A1 1 0 0 0 19 12ZM12 5.5a3 3 0 0 1 3 3V12H9V8.5a3 3 0 0 1 3-3Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Manage Users</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-b border-sky-200">
          <h1 className="text-2xl font-bold text-sky-900">Dashboard</h1>
        </div>
        {/* Rest of your content */}
      </div>
    </>
  );
};

export default Dashboard;
