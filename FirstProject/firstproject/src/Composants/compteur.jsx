import '../App.css';
import { useState } from 'react';

function Count(){
   const [count, setCount] = useState(0);

    function Click(){
   setCount(count + 1);
   }
   return(
       <button onClick={Click}>
           Nombre de clics : {count}
       </button>
   );
}

export default Count;
