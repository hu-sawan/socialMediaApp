import { useEffect, useState } from "react";
import Status from "../status/Status";
import "./ActiveMembers.scss";

interface ActiveMembersProps {
    socket: any;
}

function ActiveMembers({ socket }: ActiveMembersProps) {
    const [activeMembers, setActiveMembers] = useState(0);

    useEffect(() => {
        if (socket) {
            socket.on("activeMembers", (activeMembers: string) => {
                setActiveMembers(() => {
                    console.log(activeMembers);

                    return parseInt(activeMembers);
                });
            });
        }
    }, [socket]);
    return (
        <div className="active-members">
            <Status forWhat="online" />
            <span className="active-members__count">{activeMembers}</span>
        </div>
    );
}

export default ActiveMembers;
