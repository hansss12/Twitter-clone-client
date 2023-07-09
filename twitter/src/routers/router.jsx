import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../pages/Layout";
import TweetPost from "../component/TweetPost";
import Profile from "../component/profile";
import Thread from "../component/Thread";
import ThreadDetail from "../component/ThreadDetail";
import AuthLayout from "../pages/AuthLayout";
import Auth from "../component/Auth";
import Login from "../component/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <TweetPost />,
                children: [
                    {
                        path: "/",
                        element: <Thread />,
                    },
                    {
                        path: "/following",
                        element: <></>,
                    },
                ],
            },
            {
                path: "/profile",
                element: <Profile />,
                children: [
                    {
                        path: "/profile",
                        element: <Thread />,
                    },
                    {
                        path: "/profile/reply",
                        element: <></>,
                    },
                    {
                        path: "/profile/media",
                        element: <></>,
                    },
                    {
                        path: "/profile/like",
                        element: <></>,
                    },
                ],
            },
            {
              path: "/thread/:id",
              element: <ThreadDetail />
            }
        ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "/auth",
          element: <Auth />
        },
        {
          path: "/auth/login",
          element: <Login />
        },
        {
          path: "/auth/register",
          element: <></>
        }
      ]
    }
]);

export default router;
