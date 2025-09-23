import React, { useContext } from "react";
import { ConfigContext } from "../contexts/configure/configureContext";
import { CounterActionContext } from "../contexts/counter/counterContext";

// 절대적인 규칙
// 상태가 변경되면 컴포넌트가 리렌더링됨
export default React.memo(function CountButtons() {
  console.log("CountButtons Rendering");
  const { increment, decrement, reset } = useContext(CounterActionContext);
  const { setDarkMode, setLightMode } = useContext(ConfigContext)!;
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={increment}>증가</button>
      <br />
      <br />
      <button onClick={setDarkMode}>다크모드</button>
      <button onClick={setLightMode}>라이트모드</button>
    </>
  );
});
