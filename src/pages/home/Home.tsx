import "./Home.scss";
import MainPostForm from "../../components/mainPostForm/MainPostForm";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faHeart } from "@fortawesome/free-solid-svg-icons";
import TabNavElement from "../../components/tab/TabNavElement";

const tabs = [
    {
        icon: <FontAwesomeIcon icon={faHeart} />,
        text: "For You",
        color: "#e74c3c",
        backgroundColor: "#c03a2b6c",
        to: "friends",
    },
    {
        icon: <FontAwesomeIcon icon={faFire} />,
        text: "Trending",
        color: "#ffd43b",
        backgroundColor: "#ffd43b66",
        to: "trending",
    },
];

function Home() {
    return (
        <div className="home-section">
            <MainPostForm />
            <div className="home-section__tabs">
                {tabs.map((tab) => (
                    <TabNavElement {...tab} />
                ))}
            </div>
            <Outlet />
        </div>
    );
}

export default Home;
