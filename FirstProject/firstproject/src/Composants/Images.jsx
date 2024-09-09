
function Images(props){
    return (
        <div className=" d-flex justify-content-center">
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}

export default Images;
