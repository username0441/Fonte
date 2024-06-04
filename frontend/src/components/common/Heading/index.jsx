import HeadingImg from "../../../assets/icons/heading-vector.png"
import "./style.scss"


function Heading(props) {
    return (
        <div className="heading-wrapper">
            <h1>
                {props.heading}
                <img src={HeadingImg}/>
            </h1>
        </div>
    )
}

export default Heading;