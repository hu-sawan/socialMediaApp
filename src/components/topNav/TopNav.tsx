import SearchBar from "../searchBar/SearchBar";
import "./TopNav.scss";

const links = [
    {
        name: "Discuss",
        url: "/discuss",
    },
    {
        name: "Discover",
        url: "/discover",
    },
    {
        name: "Events",
        url: "/events",
    },
];

function TopNav() {
    return (
        <header className="top-nav">
            <div className="top-nav__logo">
                <h1>Logo</h1>
            </div>
            <SearchBar />
            <nav>
                <ul>
                    {links.map((link, idx) => (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            key={idx}
                        >
                            <li>{link.name}</li>
                        </a>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default TopNav;
