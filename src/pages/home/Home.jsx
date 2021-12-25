import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData,userRows} from '../../dummyData'
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  // const [userStats, setUserStats] = useState([]);
  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await axios.get("/users/stats", {
  //         headers: { token: "Bearer XXXX XXXXX" },
  //       });
  //       const statsList = res.data.sort((a,b)=> a._id - b._id);
  //       statsList.map((item) =>
  //         setUserStats((prevState) => [
  //           ...prevState,
  //           { name: MONTHS[item.id - 1], "New Users": item.total },
  //         ])
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
    // getStats();
  // }, []);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey='Active User' />
      <div className="homeWidgets">
        <WidgetSm data={userRows}/>
        <WidgetLg data={userRows} />
      </div>
    </div>
  );
}
