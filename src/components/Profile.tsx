import { Link, Outlet, useLocation } from "react-router-dom";
import img from "../assets/logo.jpg";
import React from "react";

const Profile: React.FC = () => {
    const borderActive: string =
        "font-semibold border-b-4 pb-2 border-emerald-500";
    const borderInactive: string = "font-semibold pb-2";
    const [showModal, setShowModal] = React.useState(false);
    const navigation = useLocation();
    return (
        <div className="flex-1 pt-2">
            <div className="flex mb-2 max-h-[10vh]">
                <Link to={"/"} className="p-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                </Link>
                <div className="pl-6">
                    <h1 className="text-xl font-bold">Raihan Aqil</h1>
                    <h3 className="text-neutral-500 font-sm">0 Tweets</h3>
                </div>
            </div>
            <div className="w-full overflow-auto h-[90vh]">
                {/* banner */}
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/574/417/275/aesthetic-vaporwave-wallpaper-preview.jpg"
                    alt="banner"
                    className="w-full max-h-[30vh]"
                />
                {/* profilr img */}
                <img
                    src={img}
                    alt="profile"
                    className="ml-5 rounded-full h-[15vh] w-[8.5vw] p-1 bg-black relative bottom-[7vh]"
                />
                {/* edit button */}
                <div className="flex justify-end relative bottom-[12vh]">
                    <button
                        onClick={() => setShowModal(true)}
                        type="button"
                        className="font-semibold border-[1px] p-1 px-4 rounded-full border-gray-500 mr-4"
                    >
                        Edit Profile
                    </button>
                    {showModal ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <h3 className="text-xl font-medium">
                                                Edit Profile
                                            </h3>
                                            <button className="bg-white text-black rounded-full text-l font-medium px-4 py-1">
                                                Save
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                            <img
                                                src={img}
                                                alt="profile"
                                                className="mx-auto rounded-full h-[15vh] w-[8.5vw] p-1 bg-black"
                                            />
                                            <form action="">
                                                <div className="flex justify-center">
                                                    <div className="relative mt-10">
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={
                                                                    1.5
                                                                }
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
                                                            name="username"
                                                            className="bg-white border text-gray-900 text-sm rounded-lg block w-[18vw] mr-10 pl-10 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-white"
                                                            placeholder="Username"
                                                        />
                                                    </div>
                                                    <div className="relative mt-10">
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
                                                            name="Email"
                                                            className="bg-white border text-gray-900 text-sm rounded-lg block w-[18vw] pl-10 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-white"
                                                            placeholder="email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex justify-center">
                                                    <div className="relative mt-10">
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke="currentColor"
                                                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            id="input-group-1"
                                                            name="fullname"
                                                            className="bg-white border text-gray-900 text-sm rounded-lg block w-[18vw] mr-10 pl-10 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-white"
                                                            placeholder="Fullname"
                                                        />
                                                    </div>
                                                    <div className="relative mt-10">
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke="currentColor"
                                                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                                                />
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            id="input-group-1"
                                                            name="location"
                                                            className="bg-white border text-gray-900 text-sm rounded-lg block w-[18vw] pl-10 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-white"
                                                            placeholder="Location"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="relative mt-10">
                                                    <div className="flex justify-center">
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke="currentColor"
                                                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            id="input-group-1"
                                                            name="imgUrl"
                                                            className="bg-white border text-gray-900 text-sm rounded-lg block w-[40vw] pl-10 p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-white"
                                                            placeholder="https://profile_image_example.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex justify-center mt-10">
                                                    <textarea
                                                        id="input-group-1"
                                                        name="description"
                                                        className="bg-white border text-gray-900 text-sm rounded-lg block w-[40vw] p-2.5  dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-white"
                                                        placeholder="Description"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                                type="button"
                                                className="font-medium border-[1px] p-2 px-4 rounded-full border-gray-500 mr-4"
                                            >
                                                Reset Password
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
                {/* profile attribute */}
                <div className="ml-5 relative bottom-[9vh]">
                    <h1 className="text-xl font-bold">Raihan Aqil</h1>
                    <h1 className="text-neutral-500 font-sm">@hansss12</h1>
                    <div className="flex text-neutral-500 py-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                        </svg>
                        <h1 className="font-sm ml-2">Joined May 2023</h1>
                    </div>
                    <div className="flex">
                        <h1 className="">
                            1{" "}
                            <span className="text-neutral-500">Following</span>
                        </h1>
                        <h1 className="ml-3">
                            0{" "}
                            <span className="text-neutral-500">Followers</span>
                        </h1>
                    </div>
                </div>

                {/* Tweet navigation */}
                <div className="grid grid-cols-4">
                    <div className="flex justify-center">
                        {navigation.pathname == "/profile" ? (
                            <Link to={"/profile"} className={borderActive}>
                                Tweets
                            </Link>
                        ) : (
                            <Link to={"/profile"} className={borderInactive}>
                                Tweets
                            </Link>
                        )}
                    </div>
                    <div className="flex justify-center">
                        {navigation.pathname == "/profile/reply" ? (
                            <Link
                                to={"/profile/reply"}
                                className={borderActive}
                            >
                                Replies
                            </Link>
                        ) : (
                            <Link
                                to={"/profile/reply"}
                                className={borderInactive}
                            >
                                Replies
                            </Link>
                        )}
                    </div>
                    <div className="flex justify-center">
                        {navigation.pathname == "/profile/media" ? (
                            <Link
                                to={"/profile/media"}
                                className={borderActive}
                            >
                                Media
                            </Link>
                        ) : (
                            <Link
                                to={"/profile/media"}
                                className={borderInactive}
                            >
                                Media
                            </Link>
                        )}
                    </div>
                    <div className="flex justify-center">
                        {navigation.pathname == "/profile/like" ? (
                            <Link to={"/profile/like"} className={borderActive}>
                                Likes
                            </Link>
                        ) : (
                            <Link
                                to={"/profile/like"}
                                className={borderInactive}
                            >
                                Likes
                            </Link>
                        )}
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default Profile;
