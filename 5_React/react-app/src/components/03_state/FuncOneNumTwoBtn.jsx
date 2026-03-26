import { useState } from "react";

const FuncOneNumTwoBtn=()=>{

    
    const [n1,setN1] = useState(0);

    return(
        <div>
            <button onClick={()=>{
                setN1(n1-1);
            }}>-</button>  &nbsp;&nbsp;          

            <h2 style={{display:'inline'}}>{n1}</h2> &nbsp;&nbsp;

            <button onClick={()=>{
                setN1(n1+1);
            }}>+</button>

        </div>
    );
}

export default FuncOneNumTwoBtn;