//컴포넌트 함수형 vs 클래스형
//원래는 클래스형 컴포넌트만 사용 : state, life cycle => 메모리 많이
//대체제 함수형 but state, life cycle 사용 불가능 => state 사용 가능한 Hook생성
//결론, 함수 컴포넌트 + Hook 권장!


//클래스 컴포넌트 생성 과정에 속하는 함수들 (=생명주기 함수)
// : render(), constructor(), getDerivedStateFromProps(), componentDidMount()
// render() : 코드를 화면에 그려주는 함수
// constructor(props) : 생명주기 함수 중 가장 먼저, 처음 한 번만 실행
//                      컴포넌트 내부에 사용되는 변수 state를 선언하고
//                      부모 객체에서 전달받은 변수 props를 초기화할 때 사용
import { Component } from "react";

class ClassState extends Component{
    constructor(props){
        super(props);
        this.state = {number1:0, number2:0} // state(number1, number2) 초기화
        //state : number1과 number2에 대한 상태관리
    }

    render(){
        console.log(this.state);
        // const {number1,number2} = this.state;
        const n1 = this.state.number1;
        const n2 = this.state.number2;
        return(
            <div>
                <h2>{n1}</h2>
                <button onClick={()=>{
                    this.setState({number1:n1 + 1});
                }}>click me!</button>
                <h2>{n2}</h2>
                <button onClick={this.number2SubOne}>click me!</button>
            </div>
        );
    }

    number2SubOne=()=>{
        this.setState({number2:this.state.number2-1});
    }
}

export default ClassState;