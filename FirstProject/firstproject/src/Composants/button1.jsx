
import '../App.css';

function Button1(props){
    return (
        <button>
            <a  style={{
                fontSize: props.size ,
                backgroundColor: props.background}}>
                {props.text}
            </a>
        </button>
    )}

export default Button1;
