import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./pages/Layout";
import TweetPost from "./components/TweetPost";
import Thread from "./components/Thread";
import Profile from "./components/Profile";
import ThreadDetail from "./components/ThreadDetail";
import AuthLayout from "./pages/AuthLayout";
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Layout/>} >
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
            </Route>
            <Route path="/auth" element={<AuthLayout/>}>
              <Route path="" element={<Auth/>}/>
              <Route path="login" element={<Login/>} />
              <Route path="register" element={<></>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
