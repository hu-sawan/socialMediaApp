import { ReactNode, useState } from "react";
import "./NavWithNotification.scss";
import { NavLink } from "react-router-dom";

interface NavWithNotificationProps {
    icon: ReactNode;
    text: string;
    href: string;
    endpoint: string;
}

function NavWithNotification({
    icon,
    text,
    endpoint,
    href,
}: NavWithNotificationProps) {
    const [notificationCount, setNotificationCount] = useState<number>(0);
    return (
        <li className="nav-with-notification__li">
            <NavLink
                to={href}
                className={({ isActive, isPending }) =>
                    isActive ? "active" : ""
                }
            >
                <div className="nav-with-notification__li__display">
                    {icon}
                    <span>{text}</span>
                </div>
                {notificationCount > 0 && (
                    <div className="nav-with-notification__li__count">
                        <span>{notificationCount}</span>
                    </div>
                )}
            </NavLink>
        </li>
    );
}

export default NavWithNotification;
