import "./Status.scss";

interface StatusProps {
    forWhat: string;
}

function Status({ forWhat }: StatusProps) {
    return <span className={`status ${forWhat}`}></span>;
}

export default Status;
