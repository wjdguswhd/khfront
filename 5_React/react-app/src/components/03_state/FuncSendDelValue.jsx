import { useState } from "react";

const FuncSendDelValue =()=>{

    const [value,setValue] = useState('');
    const [text,setText] = useState('');

    return(
        <div>
            <h1>값 입력 후 버튼을 눌러주세요</h1>
            <input type="text" onChange={(e)=>{
                setValue(e.target.value)
            }}/> <br /><br />

            <button onClick={()=>{
                setText(value);
            }}>값 전달</button> &nbsp;

            <button onClick={()=>{
                setText('');
            }}>값 삭제</button>
        </div>
    )
}

export default FuncSendDelValue;