import { useState } from "react";

const TodoList = () =>{

    const [todo,setTodo] = useState([
        {no:1, content:'React 복습', checked:false},
        {no:2, content:'점심 먹기', checked:true},
        {no:3, content:'Servlet 예습', checked:false}
    ]);

    const [no,setNo] = useState(4);

    const insertTodo=()=>{
        setTodo([...todo, {no:no, content:inputText, checked:false}]);
        setNo(no + 1);
        setInputText('');
    }

    const [inputText, setInputText] = useState('');
    const inputContent=(e)=>{
        setInputText(e.target.value);
    }

    const changeChecked=no=>{
        setTodo(todo.map(element=>
            element.no === no ? {...element, checked:!element.checked} : element
        ));
    }

    const deleteTodo=index=>{
        // //filter() : 배열의 각 요소를 돌면서 함수 실행, 조건에 맞는 요소만을 갖는 배열 반환
        // const number = [11,12,13,14,15];
        // const result = number.filter((n)=>{
        //     return n%2===0;//조건
        // })
        // console.log(result);

        setTodo(todo.filter((elem,idx)=> index !== idx));

    }

    return(
        <div className="todo">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>할 일 내용</th>
                        <th>완료 여부</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map((element, index)=>
                        (
                        <tr key={index} style={element.checked ? {textDecoration:'line-throught'} : {} }>
                            <td>{element.no}</td>
                            <td>{element.content}</td>
                            <td onClick={()=>changeChecked(element.no)}>{element.checked ? '완료' : '미완료'}</td>
                            <td><button onClick={()=>{deleteTodo(index)}}>삭제</button></td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>
            <br />
            <input type="text" onChange={inputContent} value={inputText}/><button onClick={insertTodo}>할 일 등록</button>

        </div>
    )
}

export default TodoList;