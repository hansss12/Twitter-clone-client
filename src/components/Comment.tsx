import { useSelector } from "react-redux";
import img from "../assets/logo.jpg";
import React from "react";

const Comment: React.FC = () => {
    const comment = useSelector((state: any) => {
        return state.commentReducer.data
    })
    return (
        <>
            {comment.map((el: any) => {
                return (
                    <div className="grid grid-cols-7 border-b border-neutral-800 pb-5" key={el.id}>
                        <div className="col-span-1 p-2">
                            <img
                                src={img}
                                alt="logo"
                                className="rounded-full w-11 h-11"
                            />
                        </div>
                        <div className="col-span-6 pt-2">
                            <div className="flex">
                                <h1 className="font-bold pr-2">
                                    Raihan Aqil{" "}
                                </h1>
                                <span className="text-neutral-500 font-sm">
                                    @hansss12 · Jun 23
                                </span>
                            </div>
                            <h1 className="text-white text-base font-normal">
                                {el.description}
                            </h1>
                            <div className="grid grid-cols-5 mt-5">
                                {/* comments */}
                                <div className="flex cursor-pointer w-fit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-neutral-500 hover:text-emerald-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                        />
                                    </svg>
                                    <h4 className="text-neutral-500 text-sm pl-2 hover:text-emerald-500">
                                        1
                                    </h4>
                                </div>
                                {/* retweet */}
                                <div className="flex cursor-pointer w-fit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-neutral-500 hover:text-emerald-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                                        />
                                    </svg>
                                    <h4 className="text-neutral-500 text-sm pl-2 hover:text-emerald-500">
                                        7
                                    </h4>
                                </div>
                                {/* like */}
                                <div className="flex cursor-pointer w-fit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-neutral-500 hover:text-emerald-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                    <h4 className="text-neutral-500 text-sm pl-2 hover:text-emerald-500">
                                        {el.like}
                                    </h4>
                                </div>
                                {/* views */}
                                <div className="flex cursor-pointer w-fit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-neutral-500 hover:text-emerald-500"
                                    >
                                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                                    </svg>
                                    <h4 className="text-neutral-500 text-sm pl-2 hover:text-emerald-500">
                                        2,390
                                    </h4>
                                </div>
                                {/* share */}
                                <div className="flex cursor-pointer w-fit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 text-neutral-500 hover:text-emerald-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                        />
                                    </svg> 
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Comment