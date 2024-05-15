import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavWithNotification from "../navWithNotification/NavWithNotification";
import "./Sidebar.scss";
import {
    faGear,
    faHome,
    faUserGroup,
    faBell,
    faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";

interface link {
    label: string;
    href: string;
    icon: JSX.Element;
    isNotifiable: boolean;
    endpoint?: string;
}

const links: link[][] = [
    [
        {
            label: "My feed",
            href: "/feed",
            icon: <FontAwesomeIcon icon={faHome} />,
            isNotifiable: false,
        },
        {
            label: "Groups",
            href: "/groups",
            icon: <FontAwesomeIcon icon={faUserGroup} />,
            isNotifiable: false,
        },
        {
            label: "Messages",
            href: "/messages",
            icon: <FontAwesomeIcon icon={faMessage} />,
            isNotifiable: true,
            endpoint: "/messages/notification-count",
        },
    ],
    [
        {
            label: "Notification",
            href: "/notification",
            icon: <FontAwesomeIcon icon={faBell} />,
            isNotifiable: true,
            endpoint: "/notifications/notification-count",
        },
        {
            label: "Settings",
            href: "/settings",
            icon: <FontAwesomeIcon icon={faGear} />,
            isNotifiable: false,
        },
    ],
];

function Sidebar() {
    const { theme, toggleTheme } = useTheme();
    return (
        <aside className="main-sidebar">
            <div className="main-sidebar__content">
                <nav className="main-sidebar__navigation">
                    {links.map((linkGroup, idx) => {
                        return (
                            <>
                                <ul key={idx}>
                                    {linkGroup.map((link) =>
                                        link.isNotifiable ? (
                                            <NavWithNotification
                                                key={link.label}
                                                text={link.label}
                                                href={link.href}
                                                icon={link.icon}
                                                endpoint={
                                                    link.endpoint as string
                                                }
                                            />
                                        ) : (
                                            <li key={link.label}>
                                                <NavLink
                                                    to={link.href}
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : ""
                                                    }
                                                >
                                                    {link.icon}
                                                    <span>{link.label}</span>
                                                </NavLink>
                                            </li>
                                        )
                                    )}
                                </ul>
                                {idx !== links.length - 1 && <hr />}
                            </>
                        );
                    })}
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
            <div className="main-sidebar__footer">
                <hr />
                <div className="main-sidebar__footer__toggle">
                    <span>Dark Theme</span>
                    <label className="switch" htmlFor="theme-toggler">
                        <input
                            id="theme-toggler"
                            onChange={toggleTheme}
                            type="checkbox"
                            checked={theme === "dark"}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
