import "./media.css";
import { Link, useLocation, useParams } from "react-router-dom";
// import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";

export default function Media() {
  const location = useLocation();
  const params = useParams();
  const { dispatch } = useContext(MovieContext);

  async function getMovie() {
    const res = await axios.get("/movies/find/" + params.movieId, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    setMovie(res.data);
  }

  const [movie, setMovie] = useState(
    location.hasOwnProperty("movie") ? location.movie : {}
  );
  Object.keys(movie).length === 0 && getMovie();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateMovie(movie, dispatch);
    setMovie();
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newmovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Age:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder={movie.title} />
            <label>Year</label>
            <input type="text" placeholder={movie.year} />
            <label>Age Restriction</label>
            <input type="text" placeholder={movie.limit} />
            <label>Genre</label>
            <select name="genre" id="active">
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}