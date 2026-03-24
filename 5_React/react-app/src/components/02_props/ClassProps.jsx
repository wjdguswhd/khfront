// propsEx1 클래스 컴포넌트 생성 : 오늘의 포인트 컬러는 주황입니다.
// App.jsx에 생성한 propsEx1 컴포넌트 삽입(명칭 컴포넌트 : ClassProps)

import { Component } from "react";

class propsEx1 extends Component{
    // static defaultProps = {style:'올화이트'}; //defaultProps를 내부에 넣는 방법
    render(){
        console.log(this.props);
        //const color = this.props.color
        //구조분해 할당 : 변수 이름을 props의 키와 동일하게 작성
        const {color,style} = this.props; 
        const dressCode = this.props.children;
        return (
            <div>
                 <div>오늘의 포인트 컬러는 {color}입니다.</div>
                 <div>내일의 코디는 {style}입니다.</div>
                 <div>주말 약속 드레스 코드는 {dressCode}입니다.</div>
            </div>
        )
    }
}

propsEx1.defaultProps = {style:'올블랙'};

export default propsEx1