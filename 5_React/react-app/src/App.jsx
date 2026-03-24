// import FuncComp from './components/01_component/FuncComponent';
import {Test} from './components/01_component/FuncComponent'
import ClassComp from './components/01_component/ClassComponent'
import ClassProps from './components/02_props/ClassProps'
import FuncProps from './components/02_props/FuncProps'
import Button from './components/02_props/Button'
import ClassState from './components/03_state/ClassState'
import ClassOneTwoBtn from './components/03_state/ClassOneNumTwoBtn'

function App() {
    return( 

    <div>
    <h1>컴포넌트 연습</h1>
    {/* <FuncComp/>*/}{/* JSX 주석 */}
    <ClassComp/>
    <Test/>

    <hr/>

    <h1>props 연습</h1>
    <ClassProps color="빨강" style="청청">
        <span style={{backgroundColor:'pink'}}>큐티뽀짝</span>
    </ClassProps>

    <FuncProps today="라면" tomorrow='쫄면'>
        <mark>파스타</mark>
    </FuncProps>

    <Button color='yellowgreen' text='확인'/>
    <Button color="red" text="삭제"/>
    <Button color="blue" text="수정"/>

    <hr/>
    
    <h1>state 연습1</h1>
    <ClassState/>
    <ClassOneTwoBtn/>


    </div>
    )
}

export default App
