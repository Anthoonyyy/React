import '../App.css';
import Images from "../Composants/Images";
import aboutImage from "../images/about.jpg"

function About(){
    return (
        <>
        <h1 className="text-center">About</h1>
            <Images src={aboutImage} alt="about" />
        </>
    )}

export default About;
