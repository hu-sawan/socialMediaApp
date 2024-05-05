import "./GroupChat.scss";
import { useParams } from "react-router-dom";
import ActiveMembers from "../../components/activeMembers/ActiveMembers";
import { FormEvent, useEffect, useState } from "react";
import io from "socket.io-client";
import { User } from "../../types/User";

function GroupChat() {
    const { groupId } = useParams();
    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState("");
    const [socket, setSocket] = useState<any>(null);

    useEffect(() => {
        const newSocket = io(process.env.REACT_APP_SOCKET_URL as string, {
            transports: ["websocket"],
            query: {
                roomId: groupId,
            },
        });

        setSocket(newSocket);

        newSocket.emit("join", groupId);

        newSocket.on("previousMessages", (prevMessages: string[]) => {
            setMessages(prevMessages);
        });

        newSocket.on("newMessage", (message: string) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        newSocket.on("userConnected", (name: string) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                `${name} connected`,
            ]);
        });

        newSocket.on("userDisconnected", (name: string) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                `${name} disconnected`,
            ]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, []);

    const sendMesssage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessages([...messages, message]);
        socket.emit("newMessage", message);
        setMessage("");
    };

    return (
        <div className="group-chat">
            <div className="group-chat__header">
                <h2>Group {groupId}</h2>
                <div className="group-chat__header__active">
                    <ActiveMembers socket={socket} />
                </div>
            </div>
            <div className="group-chat__messages">
                {messages.map((message, index) => (
                    <div key={index} className="group-chat__messages__message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="group-chat__input">
                <form onSubmit={sendMesssage}>
                    <input
                        type="text"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message"
                        value={message}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default GroupChat;
