import React, { useContext } from "react";
import { FaTasks } from "react-icons/fa";
import { VscClearAll } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { DarkLightMode } from "../DarkLightMode/DarkLightMode";
import { FaPlus } from "react-icons/fa6";
import Swal from "sweetalert2";

const NavBar = ({ showModel, records, clearAllTask }) => {
  const { mode, handleToggleMode } = useContext(DarkLightMode);

  const handleClearAllTask = () =>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-3",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear all!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your files has been deleted.",
          icon: "success"
        });
        clearAllTask()
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary files are safe :)",
          icon: "error"
        });
      }
    });
    
    // clearAllTask()
  }
 
  return (
    <>
      <nav
        className={`w-full max-w-screen-lg px-4 py-2 mx-auto  
        rounded-md lg:px-8 lg:py-3 mt-2 flex backdrop-blur-sm bg-gradient-to-b from-blue-400 text-opacity-100`}
        style={{
          boxShadow:
            mode === "light"
              ? "0 4px 6px -1px"
              : "0 20px 50px rgba(8, 112, 184, 0.7)",
              fontFamily: "Inter, sansSerif",
          fontOpticalSizing: 'auto',
          fontWeight: '400',
          fontStyle: 'normal'
        }}
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div>
            <div className="flex">
              <span className="mr-2 pt-1 text-2xl">
                <FaTasks />
              </span>
              <span>
                <a
                  href="/"
                  className="block cursor-pointer text-xl font-bold"
                >
                  All Tasks
                </a>
              </span>
            </div>
            <span style={{color:mode==='light'?"#52e952":"white"}} className="text-sm">{records} Records</span>
          </div>
          <button
            onClick={showModel}
            className="py-2 px-3 font-bold  border-transparent text-center text-sm transition-all shadow-md rounded-lg bg-blue-950  hover:bg-gray-700 hover:text-white/90 focus:z-10 focus:ring-4 focus:ring-gray-100 hover:shadow-sm focus:shadow-none active:bg-yellow-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex "
            type="button"
          >
            <span className="mr-2 pt-1 text-sm">
              <FaPlus />
            </span>
            Add Task
          </button>
          <div className="flex">
            <div className="hidden lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="flex active:bg-yellow-700 items-center p-1 gap-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white">
                  <a href="#" className="flex items-center">
                    <span className="text-xl mr-2 font-bold"><VscClearAll /></span>
                  <button onClick={handleClearAllTask}>
                    Clear All Tasks
                    </button>   
                  </a>
                </li>
                <li className="flex active:bg-yellow-700 items-center p-1 gap-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <a href="#" className="flex items-center">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div onClick={handleToggleMode} className="flex active:bg-yellow-700 items-center p-1 gap-x-2 mx-2 rounded-full px-3 py-2 text-sm font-medium hover:bg-gray-400 hover:text-white">
              <button onClick={handleToggleMode} type="button" className="flex">
                {mode === "light" ? (
                  <IoSunnyOutline className="text-xl mr-1" />
                ) : (
                  <MdDarkMode className="text-xl mr-1" />
                )}
              </button>
            </div>
          </div>
          <div className="items-center hidden gap-x-2 lg:flex">
            <div className="w-full max-w-sm min-w-[200px]">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute w-5 h-5 top-2.5 left-2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 bg-transparent text-sm rounded-md transition duration-300 ease focus:outline-none  focus:z-10 focus:ring-2 focus:ring-gray-100  hover:border-slate-300 shadow-md focus:shadow placeholder-blue-300 placeholder:text-sm placeholder:font-semibold " 
                  placeholder="Type here..."
                  // ${mode === 'light'?"black":"white"}
                  style={{border: mode === 'light'?"2px solid #0298cf":"2px solid white"}}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="relative mt-3 ml-auto h-6 max-h-[40px] w-6 max-w-[20px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
