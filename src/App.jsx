import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // count:현재 저장되어있는값, setCount:업데이트하는 함수, useState: 초기값
  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickSubtract = () => {
    
    if(count <= 0) {
      alert("count의 값이 0보다 작을 수 없습니다!");
      return;
    }
    
    setCount(count - 1);
    
    // ↓ 같은 결과가 나오는데 써야할 경우가 있다..
    // setCount((prev) => {
    //   return prev -1;
    // });
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button className="bg-green-300 w-12 h-12 rounded-full" onClick={onClickAdd}>+</button>
      <button className="bg-green-300 w-12 h-12 rounded-full" onClick={onClickSubtract}>-</button>
    </div>
  );
}

export default App;

