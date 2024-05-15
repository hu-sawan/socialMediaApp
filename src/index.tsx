import "./index.scss";
import ReactDOM from "react-dom/client";
import App from "./App";
import AllContexts from "./context/AllContexts";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <AllContexts>
        <App />
    </AllContexts>
);
