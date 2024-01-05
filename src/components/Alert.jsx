
function Alert(props) {
    return(
        <div className={`alert ${props.classes}`} id="alert" role="alert">
            {props.msg}
        </div>
    );
}

export default Alert;