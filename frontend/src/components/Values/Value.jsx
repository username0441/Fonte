function Value(props) {
    return (
        <div className="value">
            <img className="value-img" src={props.img} />
            <div>
                <h2 className="val-heading">{props.h2}</h2>
                <p className="value-context">
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default Value;