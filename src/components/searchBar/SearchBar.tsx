import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    return (
        <div className="search-bar">
            <FontAwesomeIcon
                className="magnifier-icon"
                icon={faMagnifyingGlass}
            />
            <input type="text" placeholder="Search" />
        </div>
    );
}

export default SearchBar;
