import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import MediaList from "./pages/mediaLists/MediaList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Media from "./pages/media/Media";
import NewMovie from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

const App = () => {
  // const { user } = useContext(AuthContext);
  const user = true;
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {!user && (
          <Route exact path="/">
            <Login />
          </Route>
        )}
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newuser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/lists">
                <MediaList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/movie/:movieId">
                <Media />
              </Route>
              <Route path="/newmovie">
                <NewMovie />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
