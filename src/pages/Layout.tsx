import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Trend from "../components/Trend";
import TweetPost from "../components/TweetPost";
import Thread from "../components/Thread";
import Profile from "../components/Profile";
import ThreadDetail from "../components/ThreadDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfile, fetchThread } from "../store/actions/actions";

const Layout: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchThread())
    dispatch(fetchProfile())
    dispatch(fetchProfile())
  })
  return (
    <div className="bg-black text-white w-screen min-h-screen h-full flex select-none">
      <Sidebar />
      <div className="flex flex-1 border border-neutral-800 border-b-0">
        <Routes>
          <Route path="" element={<TweetPost/>}>
            <Route path="" element={<Thread/>}/>
            <Route path="following" element={<></>}/>
          </Route>
          <Route path="profile" element={<Profile/>}>
            <Route path="" element={<Thread/>}/>
            <Route path="reply" element={<></>}/>
            <Route path="media" element={<></>}/>
            <Route path="like" element={<></>}/>
          </Route>
          <Route path="thread/:id" element={<ThreadDetail />}/>
        </Routes>
        <Trend />
      </div>
    </div>
  );
};

export default Layout;
