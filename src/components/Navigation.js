import { Link } from "react-router-dom";

function Navigation () {
    return (    
        <section className="header">
            <div className="container">
                <nav className="header_nav">
                    <Link to="/" className="logo_link"> 
                        <img src="./img/icon/logo.png" alt="Minimalisté logo" className="header_logo" />
                        <span className="link_text">Minimalisté </span> </Link>
                    <Link to="/about" className="header_link"> 
                        <img src="./img/icon/about.png" alt="О нас" className="header_img" />
                        <span className="link_text">О нас </span> </Link>
                    <Link to="/cart" className="header_link"> 
                        <img src="./img/icon/bag.png" alt="Корзина" className="header_img" />
                        <span className="link_text">Корзина </span> </Link>
                    <Link to="/sign" className="header_link">
                        <img src="./img/icon/user.png" alt="Войти в личный кабинет" className="header_img" />
                        <span className="link_text">Войти </span> </Link>
                </nav>
            </div>
        </section>
)};

export default Navigation;