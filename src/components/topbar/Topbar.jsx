import { Language, NotificationsNone, Settings } from '@mui/icons-material'
import "./topbar.css"
import { PUBLIC_URL } from '../../constansts'

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
                    <img src={PUBLIC_URL+"/no-user.jpg"} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
