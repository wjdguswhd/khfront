// propsEx2 함수형 컴포넌트 생성 : 오늘 먹은 음식은 된장국입니다.
// App.jsx에 생성한 propsEx2 컴포넌트 삽입(명칭 컴포넌트 : FuncProps)

// const propsEx2 =(props) =>{
//         console.log(props);
//         const {today, tomorrow='우동'} = props;
const propsEx2=({today,tomorrow="우동",children})=>{
    return (
        <div>
            <div>오늘 먹은 음식은 {today}입니다.</div>
            <div>내일 먹을 음식은 {tomorrow}입니다.</div>
            <div>어제 먹은 음식은 {children}입니다.</div>
        </div>
    )
}

export default propsEx2