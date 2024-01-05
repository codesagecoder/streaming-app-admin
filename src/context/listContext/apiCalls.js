import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from './ListActions'
import axios from 'axios';

export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
        const res = await axios.get("/api/lists", {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });
        dispatch(getListsSuccess(res.data))
    } catch (err) {
        dispatch(getListsFailure())
    }
}

//DELETE
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("/api/lists/" + id, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });
        dispatch(deleteListSuccess(id))
    } catch (err) {
        dispatch(deleteListFailure())
    }
}

// //UPDATE
// export const updatelist = async (list, dispatch) => {
//     dispatch(updatelistStart());
//     try {
//         const res = await axios.put("/api/lists/" + list._id,list, {
//             headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
//         });
//         dispatch(updatelistSuccess(res.data))
//     } catch (err) {
//         dispatch(updatelistFailure())
//     }
// }

//CREATE
export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {

        const res = await axios.post("/api/lists", list, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });
        dispatch(createListSuccess(res.data));
    } catch (err) {
        console.log(list);
        dispatch(createListFailure())
    }
}

// GET LIST
export const getList = async (id) => {
    try {
        const res = await axios.get("/api/lists/find/" + id, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken },
        });

        return res.data;
    } catch (err) {
        return err;
    }
}