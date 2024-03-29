import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/api/auth/login", user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
        console.log(res.data)
    } catch {
        dispatch(loginFailure());
    }
};