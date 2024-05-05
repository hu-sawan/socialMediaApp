import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavWithNotification from "../navWithNotification/NavWithNotification";
import "./Sidebar.scss";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    return (
        <aside className="main-sidebar">
            <div>
                <nav className="main-sidebar__navigation">
                    <ul>
                        <li>Home</li>
                        <NavWithNotification
                            endpoint="/groups/notification-count"
                            href="/groups"
                            text="Groups"
                            icon={<FontAwesomeIcon icon={faUserGroup} />}
                        />
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <hr />
                <nav className="main-sidebar__navigation">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <hr />
                <div className="main-sidebar__profile">
                    <div className="image">
                        <img
                            src="https://via.placeholder.com/30"
                            alt="profile"
                        />
                    </div>
                    <span>John Doe</span>
                </div>
            </div>
            <div className="sidebar-footer">
                <span>Dark Theme</span>
                <input type="checkbox" />
            </div>
        </aside>
    );
}

export default Sidebar;
