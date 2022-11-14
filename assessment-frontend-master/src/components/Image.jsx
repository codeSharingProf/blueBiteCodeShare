

const Image = (props) => {
    const {src, alt, id} = props
    return <img className="imageComp" id={id} src={src} alt={alt} style={{border: "2px solid black", borderRadius: "0.5rem"}} width="250px" height="120px" />
}
export default Image;
