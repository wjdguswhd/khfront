const TodoList = () =>{

    const [todo,setTodo] = useState([]);

    return(
        <div className="todo">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>할 일 내용</th>
                        <th>완료 여부</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <br />
            <input type="text" /> <button>할 일 등록</button>

        </div>
    )
}

export default TodoList;