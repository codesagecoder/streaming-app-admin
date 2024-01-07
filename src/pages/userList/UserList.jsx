import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import "./userList.css";
import { userRows as rows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    console.log('pressed')
    setData(data.filter(item => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "UserName",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImage" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction Volume", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={'/user/' + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>

          <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
        </>
      ),
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
