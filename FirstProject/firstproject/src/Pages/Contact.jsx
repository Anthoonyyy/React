import '../App.css';
import Images from "../Composants/Images";
import contactImage from "../images/contact.jpg"

function Contact(){
    return (
        <>
        <h1 className="text-center">Contact</h1>
            <Images src={contactImage} alt="contact" />
        </>
    )}

export default Contact;
