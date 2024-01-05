import { PUBLIC_URL } from "../../constansts";
import "./widgetLg.css";

export default function WidgetLg({ data }) {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">User</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {data.map((user) =>
            <tr key={user.id} className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src={PUBLIC_URL + "/no-user.jpg"}
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{user.username}</span>
              </td>
              <td className="widgetLgDate">{user.date}</td>
              <td className="widgetLgAmount">{user.transaction}</td>
              <td className="widgetLgStatus">
                <Button type={user.status} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
