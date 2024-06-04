import { Link } from "react-router-dom";
import "./style.scss"

function Navbar() {
    return (
        <nav className="nav-wrapper">
            <div className="left">
                <h1>
                    <Link to={"/"}>Fonte</Link>
                </h1>
            </div>
            <div className="middle">
                <Link to={"/about"}>О нас</Link>
                <Link to={"#"}>Команда</Link>
                <Link to={"#"}>Блог</Link>
                <Link to={"#"}>Продукты</Link>
                <Link to={"#"}>Контакты</Link>
            </div>
            <div className="right">
                <button className="warning-btn">Войти</button>
                <Link to={"#"}>
                    <ins>Рус</ins>
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;