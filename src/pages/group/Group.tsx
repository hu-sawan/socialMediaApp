import { Link, useParams } from "react-router-dom";
import "./Group.scss";

function Group() {
    const { groupId } = useParams();
    return (
        <div className="group-section">
            <div className="wrapper">
                <div className="group-header">
                    <div className="cover-photo">
                        <img
                            src="https://via.placeholder.com/840x200"
                            alt="Group Banner"
                        />
                    </div>
                    <div className="group-info">
                        <div className="group-info__photo">
                            <img
                                src="https://via.placeholder.com/130"
                                alt="Group"
                            />
                        </div>
                        <div className="group-info__details">
                            <h1>Group {groupId}</h1>
                            <p>
                                This is group {groupId}.
                                <span className="created-at">
                                    It was created on October 1st, 2021 by User{" "}
                                    {groupId}.
                                </span>
                            </p>
                        </div>
                        <div className="group-info__actions">
                            <button>
                                <Link to={`/groups/chat/${groupId}`}>Chat</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Group;
