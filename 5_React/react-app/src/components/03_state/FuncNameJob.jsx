import { useState } from "react";

const FuncNameJob=()=>{   

    const [name,setName] = useState('');
    const [job,setJob] = useState('');

    return (
        
        <div>
            {/* 이름 : onBlur, 직업 onChange */}
            <input onBlur ={(e)=>{
                setName(e.target.value);
            }} type="text" placeholder="이름을 입력하세요" />

            <input onChange={(e)=>{
                setJob(e.target.value);
            }}type="text" placeholder="직업을 입력하세요"/>

            <br />

            <span>이름 : {name}</span> <br />
            <span>직업 : {job}</span>

        </div>
    )

}

export default FuncNameJob;