import "./mediaLists.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists, deleteList } from "../../context/listContext/apiCalls";

export default function MediaList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };


  const columns = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "title", headerName: "Title", width: 240 },
    { field: "genre", headerName: "Genre", width: 140 },

    { field: "type", headerName: "Type", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* Setup useLocation */}
            <Link to={"/list/" + params.row._id} state={params.row}>
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
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={r => r._id}
      />
    </div>
  );
}
