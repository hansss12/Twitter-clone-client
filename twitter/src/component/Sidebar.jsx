import { Link, useLocation } from "react-router-dom";
import img from "../assets/logo.jpg"

export default function Sidebar() {
  const navigation = useLocation();
  const active = "text-xl font-semibold";
  return (
      <nav className=" flex flex-col justify-between py-8 px-12 gap-2">
          <div className="flex flex-col justify-between  flex-1">
              {/* <!-- Home --> */}
              <Link
                  to={"/"}
                  className="w-fit flex gap-x-4 items-center hover:bg-neutral-900 transition-all py-2 px-4 rounded-full"
              >
                  {navigation.pathname == "/" ||
                  navigation.pathname == "/following" ? (
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                      >
                          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                  ) : (
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
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                      </svg>
                  )}
                  {navigation.pathname == "/" ||
                  navigation.pathname == "/following" ? (
                      <span className={active}>Home</span>
                  ) : (
                      <span className="text-xl">Home</span>
                  )}
              </Link>
              {/* <!-- Explore --> */}
              <a
                  href="#"
                  className="w-fit flex gap-x-4 items-center hover:bg-neutral-900 transition-all py-2 px-4 rounded-full"
              >
                  <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="fill-current text-white w-7 h-7 r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                  >
                      <g>
                          <path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path>
                      </g>
                  </svg>
                  <span className="text-xl">Explore</span>
              </a>
              {/* <!-- Friends --> */}
              <a
                  href="#"
                  className="w-fit flex gap-x-4 items-center hover:bg-neutral-900 transition-all py-2 px-4 rounded-full"
              >
                  <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="fill-current text-white w-7 h-7 r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                  >
                      <g>
                          <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
                      </g>
                  </svg>
                  <span className="text-xl">Friends</span>
              </a>
              {/* <!-- Notification --> */}
              <a
                  href="#"
                  className="w-fit flex gap-x-4 items-center hover:bg-neutral-900 transition-all py-2 px-4 rounded-full"
              >
                  <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className=" fill-current text-white w-7 h-7 r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                  >
                      <g>
                          <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
                      </g>
                  </svg>
                  <span className="text-xl">Notification</span>
              </a>
              {/* <!-- Messages --> */}
              <a
                  href="#"
                  className="w-fit flex gap-x-4 items-center hover:bg-neutral-900 transition-all py-2 px-4 rounded-full"
              >
                  <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className=" fill-current text-white w-7 h-7 r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                  >
                      <g>
                          <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                      </g>
                  </svg>
                  <span className="text-xl">Messages</span>
              </a>
              {/* <!-- Bookmarks --> */}
              <a
                  href="#"
                  className="w-fit flex gap-x-4 items-center hover:bg-neutral-900 transition-all py-2 px-4 rounded-full"
              >
                  <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="fill-current to-white w-7 h-7 r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                  >
                      <g>
                          <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                      </g>
                  </svg>
                  <span className="text-xl">Bookmarks</span>
              </a>
              {/* <!-- Profile --> */}
              <Link
                  to={"/profile"}
                  className="w-fit flex gap-x-4 items-center hover:bg-neutral-900 transition-all py-2 px-4 rounded-full"
              >
                  {navigation.pathname.includes("profile") ? (
                      <>
                          <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="fill-current text-white w-7 h-7 r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                          >
                              <g>
                                  <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
                              </g>
                          </svg>
                          <span className={active}>Profile</span>
                      </>
                  ) : (
                      <>
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
                                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              />
                          </svg>
                          <span className="text-xl">Profile</span>
                      </>
                  )}
              </Link>
              {/* <!-- More --> */}
              <a
                  href="#"
                  className="w-fit flex gap-x-4 items-center hover:bg-neutral-900 transition-all py-2 px-4 rounded-full"
              >
                  <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="fill-current text-white w-7 h-7 r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                  >
                      <g>
                          <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
                      </g>
                  </svg>
                  <span className="text-xl">More</span>
              </a>
              {/* <!-- Tweet Button --> */}
              <button className="bg-emerald-500 rounded-3xl text-sm font-bold w-56 h-12 m-4 hover:bg-emerald-600 transition-all">
                  Tweet
              </button>
          </div>
          {/* <!-- User Section --> */}
          <div className="flex items-center justify-between gap-4 hover:bg-neutral-900 rounded-full py-2 px-2 transition-all">
              <div>
                  <img
                      src={img}
                      alt="profile-photo"
                      className="w-12 h-12 rounded-full"
                  />
              </div>
              <div className="flex flex-col flex-1 justify-center">
                  <span className="font-bold text-sm">Raihan</span>
                  <span className="text-gray-500 text-xs">@hansss12</span>
              </div>
              <div className="">
                  <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="fill-current text-white w-5 h-5 r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                  >
                      <g>
                          <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                      </g>
                  </svg>
              </div>
          </div>
      </nav>
  );
}