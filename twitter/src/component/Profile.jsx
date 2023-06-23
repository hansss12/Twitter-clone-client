import { Link, Outlet, useLocation } from "react-router-dom";
import img from "../assets/logo.jpg";

export default function Profile() {
  const borderActive = "font-semibold border-b-4 pb-2 border-emerald-500";
  const borderInactive = "font-semibold pb-2";
  const navigation = useLocation()
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
                  <button className="font-semibold border-[1px] p-1 px-4 rounded-full border-gray-500 mr-4">
                      Edit Profile
                  </button>
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
                          1 <span className="text-neutral-500">Following</span>
                      </h1>
                      <h1 className="ml-3">
                          0 <span className="text-neutral-500">Followers</span>
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
                          <Link to={"/profile/reply"} className={borderActive}>
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
                          <Link to={"/profile/media"} className={borderActive}>
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
                          <Link to={"/profile/like"} className={borderInactive}>
                              Likes
                          </Link>
                      )}
                  </div>
              </div>

              <Outlet />
          </div>
      </div>
  );
}