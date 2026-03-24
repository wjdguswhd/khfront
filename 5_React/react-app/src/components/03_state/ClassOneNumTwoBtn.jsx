//숫자 기본 값은 0부터 시작
//-버튼을 누르면 하나씩 숫자가 작아지고 +버튼을 누르면 하나씩 숫자가 커짐


import { Component } from "react";

class ClassOneTwoBtn extends Component{
     constructor(props){
        super(props);
        this.state = {num:0} 
    }
    render(){
        //const {num} = this.state // state 내에 key가 num이 있으면 해당 값을 변수 num에 넣겟다
        const n1 = this.state.num;
        return (
            <div>
                <button onClick={()=>{
                    this.setState({num:n1 - 1});
                }}>-</button> &nbsp;&nbsp;

                <h2 style={{display:'inline'}}>{n1}</h2> &nbsp;&nbsp;

                <button onClick={()=>{
                    this.setState({num:n1 + 1});
                }}>+</button>
            </div>
        );
    }
}

export default ClassOneTwoBtn;