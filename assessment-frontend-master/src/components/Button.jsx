const Button = ({setHidden, isHidden}) => {

    return <button className="btn"
                   onClick={() => setHidden(!isHidden)}>{isHidden ? "show" : "hide"}</button>
}
export default Button;
