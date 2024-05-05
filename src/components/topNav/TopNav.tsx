import SearchBar from "../searchBar/SearchBar";
import "./TopNav.scss";

function TopNav() {
    return (
        <header className="top-nav">
            <div className="top-nav__logo">
                <h1>Logo</h1>
            </div>
            <SearchBar />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default TopNav;
