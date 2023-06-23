import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../pages/Layout";
import TweetPost from "../component/TweetPost";
import Profile from "../component/profile";
import Thread from "../component/Thread";
import ThreadDetail from "../component/ThreadDetail";

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
]);

export default router;
