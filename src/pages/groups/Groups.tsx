import { Link } from "react-router-dom";
import { Group } from "../../types/Group";
import "./Groups.scss";

const groups: Group[] = [
    {
        id: "1",
        name: "Group 1",
        description: "This is group 1",
        photoURL: "https://via.placeholder.com/150",
        bannerURL: "https://via.placeholder.com/800x200",
        createdAt: "2021-10-01",
        createdBy: "User 1",
    },
    {
        id: "2",
        name: "Group 2",
        description: "This is group 2",
        photoURL: "https://via.placeholder.com/150",
        bannerURL: "https://via.placeholder.com/800x200",
        createdAt: "2021-10-02",
        createdBy: "User 2",
    },
];

function Groups() {
    return (
        <div className="groups-section">
            <h1>Groups</h1>
            <div className="groups">
                {groups.map((group) => (
                    <Link
                        to={`/groups/${group.id}`}
                        key={group.id}
                        className="group"
                    >
                        <h3>{group.name}</h3>
                        <p>{group.description}</p>
                        <p>Created at: {group.createdAt}</p>
                        <p>Created by: {group.createdBy}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Groups;
