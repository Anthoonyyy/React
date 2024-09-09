import {useParams} from "react-router-dom";

function User(){
    const { username } = useParams();
    return (
        <h1>Bonjour {username}</h1>
    );
}

export default User;