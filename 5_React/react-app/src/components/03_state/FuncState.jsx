//FuncState 함수형 컴포넌트 생성
//제일 큰 제목태그의 내용으로 number1을 갖고 있게 하기
//그 아래 click me!라는 버튼
//제일 큰 제목태그의 내용으로 number2를 갖고 있게 하기
//그 아래 click me!라는 버튼

import { useState } from "react";

const FuncState=()=>{   
    //Hook 중의 하나인 userState
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const number2SubOne=()=>{
        setNumber2(number2 - 1);
    }

    return (
     <div>
        <h1>{number1}</h1>
        <button onClick={()=>{
            setNumber1(number1 + 1);
        }}>click me!</button>
        <h1>{number2}</h1>
        <button onClick={number2SubOne}>click me!</button>

    </div>
    );
}

export default FuncState;