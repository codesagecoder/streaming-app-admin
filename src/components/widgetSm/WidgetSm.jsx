import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function WidgetSm({ data }) {
  // const [newUsers, setNewUsers] = useState([]);
  // useEffect(() => {
  //   const getNewUsers = async () => {
  //     try {
  //       const res = axios.get("/api/users?new=true", {
  //         headers: { token: "Bearer XXX XXXX XXXX XXX" },
  //       });
  //       setNewUsers(res.data)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   // getNewUsers()
  // }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {data.slice(0, 2).map((user, i) => (
          <li key={user.id} className="widgetSmListItem">
            <img src={user.avatar} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername"> {user.username}</span>
              <span className="widgetSmUserTitle">{user.job}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" /> Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
