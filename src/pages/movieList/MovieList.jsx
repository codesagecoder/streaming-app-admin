import "./movieList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";
import storage from "../../firebase";

export default function MovieList() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const deleteStorage = (item) => {
      storage.ref(`/${item.isSeries?'SERIES':'MOVIES'}/${item.year+'_'+item.title}`).delete().then((success)=>{
        console.log(success);
      }).catch((error)=>{
        console.log(error)
      });
  };

  const handleDelete = (id) => {
    try{
      const movie =movies.find(found=>found._id===id);
      console.log(movie)
      deleteStorage(movie);
      deleteMovie(id,dispatch);
    } catch(error){
      console.log(error)
    }
  };

  
  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Age", width: 120 },
    { field: "isSeries", headerName: "Is-Series", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* Setup useLocation */}
            <Link to={{pathname:"/movie/" + params.row._id,movie:params.row}}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={r=>r._id}
      />
    </div>
  );
}
