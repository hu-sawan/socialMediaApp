import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./components/topNav/TopNav";
import Sidebar from "./components/sidebar/Sidebar";
import PromotionSidebar from "./components/promotionSidebar/PromotionSidebar";
import Home from "./pages/home/Home";
import Groups from "./pages/groups/Groups";
import Group from "./pages/group/Group";
import GroupChat from "./pages/groupChat/GroupChat";
import { useTheme } from "./context/ThemeContext";
import Feed from "./pages/feed/Feed";

function App() {
    const { theme } = useTheme();

    const html = document.documentElement;

    if (theme === "light") {
        if (html.classList.contains("dark")) html.classList.remove("dark");
        html.classList.add("light");
    } else {
        if (html.classList.contains("light")) html.classList.remove("light");
        html.classList.add("dark");
    }

    return (
        <main className="App">
            <TopNav />
            <BrowserRouter>
                <div className="content">
                    <Sidebar />
                    <div className="content__wrapper">
                        <div className="section">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate to="/feed/friends" />}
                                />
                                <Route
                                    path="/feed"
                                    element={<Navigate to="/feed/friends" />}
                                />
                                <Route path="/feed" element={<Home />}>
                                    <Route path="friends" element={<Feed />} />
                                    <Route path="trending" element={<Feed />} />
                                </Route>
                                <Route path="/groups" element={<Groups />} />
                                <Route
                                    path="/groups/:groupId"
                                    element={<Group />}
                                />
                                <Route
                                    path="/groups/chat/:groupId"
                                    element={<GroupChat />}
                                />
                                <Route
                                    path="/services"
                                    element={<h1>Services</h1>}
                                />
                                <Route
                                    path="/contact"
                                    element={<h1>Contact</h1>}
                                />
                            </Routes>
                        </div>
                        <PromotionSidebar />
                    </div>
                </div>
            </BrowserRouter>
        </main>
    );
}

export default App;
