import { useContext } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AuthContext } from "./context/authContext/AuthContext";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Media from "./pages/media/Media";
import MediaList from "./pages/mediaLists/MediaList";
import MovieList from "./pages/movieList/MovieList";
import NewList from "./pages/newList/NewList";
import NewMovie from "./pages/newMovie/NewMovie";
import NewUser from "./pages/newUser/NewUser";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

import './App.css';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Router to='/login' allow={!!user} />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/newuser" element={<NewUser />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />

            <Route path="/movie/:movieId" element={<Media />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/newmovie" element={<NewMovie />} />

            <Route path="/list/:listId" element={<List />} />
            <Route path="/lists" element={<MediaList />} />
            <Route path="/newlist" element={<NewList />} />
          </Route>
        </Route>

        <Route element={<Router to='/' allow={!user} />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

function Router({ allow, to }) {
  return (
    allow ? <Outlet /> : <Navigate to={to} />
  );
}

export default App;
