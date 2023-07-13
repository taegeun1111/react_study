import ChangeEvent from './component/chap01_event/ChangeEvent';
import ClickEvent from './component/chap01_event/ClickEvent';
import SubmitEvent from './component/chap01_event/SubmitEvent';
import logo from './logo.svg';
import SayHello from './SayHello';

function App() {
  const looping  = () => {
    const helloList = [];
    for (let i = 0; i < 5; i++) {
      helloList.push(<SayHello />);
    }

    return helloList;
  }
  return (
    //jsx문법 (소괄호 영역)에서는 스크립트 코드를 직접 사용 불가능
    //{} 안에서 함수호출문이나 변수참조를 할 수 있음.
    <>
      {/* <ChangeEvent /> */}
      <SubmitEvent />
   </>
  );
}
// 부모 태그가 없는
// 태그를 여러 줄 쓰는 경우 에러
export default App;
