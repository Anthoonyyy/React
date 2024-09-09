import '../App.css';
import Images from "../Composants/Images";
import errorImage from "../images/404.jpg"
import {Image} from "react-bootstrap";

function Error404(){
    return (
        <>
        <h1 className="text-center">ERREUR 404</h1>
            <Images src={errorImage} alt="Erreur404" />
        </>
    )}

export default Error404;
