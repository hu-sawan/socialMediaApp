import { NavLink } from "react-router-dom";
import "./TabNavElement.scss";
import { useState } from "react";

interface TabNavElementProps {
    icon: JSX.Element;
    text: string;
    color: string;
    backgroundColor: string;
    to: string;
}

function TabNavElement({
    icon,
    text,
    color,
    backgroundColor,
    to,
}: TabNavElementProps) {
    const [active, setActive] = useState(false);
    return (
        <NavLink
            className={({ isActive }) => {
                let classArr = ["tab-nav-element"];

                if (isActive) {
                    classArr.push("active");
                    setActive(true);
                } else {
                    setActive(false);
                }

                return classArr.join(" ");
            }}
            style={{
                color: active ? color : "",
                backgroundColor: active ? backgroundColor : "",
            }}
            to={to}
        >
            {icon}
            <span className="tab-nav-element__text">{text}</span>
        </NavLink>
    );
}

export default TabNavElement;
