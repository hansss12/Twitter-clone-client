import React from "react";
import logo from "../../assets/twitter-white.png";

const Login: React.FC = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-20 h-16 ml-[10vw]"
                    />
                    <h1 className="text-4xl font-bold text-white mt-8">
                        Sign in to twitter clone
                    </h1>
                    <div className="mt-10 border-b border-white pb-5">
                        <button
                            type="button"
                            className="text-black bg-[#ffffff] hover:bg-[#ffffff]/90 focus:ring-4 focus:ring-[#ffffff]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#ffffff]/55 mr-2 mb-2"
                        >
                            <svg
                                className="mr-2 -ml-1 w-4 h-4"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="google"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 488 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                ></path>
                            </svg>
                            Sign in with Google
                        </button>
                        <button
                            type="button"
                            className="text-black bg-[#ffffff] hover:bg-[#ffffff]/90 focus:ring-4 focus:ring-[#ffffff]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#ffffff]/55 mr-2 mb-2"
                        >
                            <svg
                                className="mr-2 -ml-1 w-5 h-5"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="apple"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                ></path>
                            </svg>
                            Sign in with Apple
                        </button>
                    </div>
                    {/* form login */}
                    <div className="mt-10">
                        <form action="POST">
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="input-group-1"
                                    className="bg-black border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-white"
                                    placeholder="jhondoe"
                                />
                            </div>
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="input-group-1"
                                    className="bg-black border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-white"
                                    placeholder="jhondoe@mail.com"
                                />
                            </div>
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="password"
                                    id="input-group-1"
                                    className="bg-black border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-white"
                                    placeholder="password"
                                />
                            </div>
                            {/* submit button */}
                            <button type="submit" className="rounded-full border border-white hover:bg-black hover:text-white bg-white w-full text-xl font-semibold text-black p-2 mt-5">
                                Sign Up
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login