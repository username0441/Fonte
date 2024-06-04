import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import "./style.scss"

function Navbar() {
    return (
        <nav className="nav-wrapper">
            <div className="left">
                <Link to={"/"}>
                    <Heading heading={"Fonte"}/>
                </Link>
            </div>
            <div className="middle">
                <Link to={"/"}>О нас</Link>
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