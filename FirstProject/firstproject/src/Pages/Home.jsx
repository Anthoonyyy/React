import '../App.css';
import Images from "../Composants/Images";
import reactImage from '../images/react.jpg';

function Home(){
    return (
        <>
        <h1 className="text-center">Home</h1>
        <Images src={reactImage} alt="React" />
        </>
    )}

export default Home;

