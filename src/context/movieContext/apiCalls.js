import { updateMovieStart, updateMovieFailure, updateMovieSuccess, createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions";
import axios from 'axios';

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get("/api/movies", {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });
        dispatch(getMoviesSuccess(res.data))
    } catch (err) {
        dispatch(getMoviesFailure())
    }
}

//DELETE
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete("/api/movies/" + id, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });
        dispatch(deleteMovieSuccess(id))
    } catch (err) {
        dispatch(deleteMovieFailure())
    }
}

//UPDATE
export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart());
    try {
        const res = await axios.put("/api/movies/" + movie._id, movie, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });
        dispatch(updateMovieSuccess(res.data))
    } catch (err) {
        dispatch(updateMovieFailure())
    }
}

//CREATE
export const createMovie = async (movie, dispatch) => {
    console.log(movie)
    dispatch(createMovieStart());
    try {
        const res = await axios.post("/api/movies", movie, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });
        dispatch(createMovieSuccess(res.data));
        alert(movie.title, 'has been created!')
    } catch (err) {
        dispatch(createMovieFailure())
        alert(movie.title + 'has NOT been created!')
    }
}

// GET SINGLE MOVIE
export const getMovie = async (id) => {
    try {
        const res = await axios.get("/api/movies/find/" + id, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });
        return res.data;
    } catch (err) {
        return err;
    }
}
