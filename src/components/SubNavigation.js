import { Link } from "react-router-dom";

function SubNavigation ({componentName, componentHeader}) {
    return (
        <div className="navigation">
            <div className="container">
                <nav>
                    <Link to="/" className="navigation_link"> Главная </Link>
                    <span className="navigation_separator"> / </span>
                    <Link to={componentName} className="navigation_link"> {componentHeader} </Link>
                </nav>
            </div>
        </div>
)};

export default SubNavigation;