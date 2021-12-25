import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">
                        TheAdmin
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={process.env.PUBLIC_URL+"/no-user.jpg"} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
