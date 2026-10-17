import Counter from "./component/Counter";
import Greatting from "./component/Greatting";
import MytestComponent from "./component/TestComponent";

function App() {
  return (
    <>
      <Greatting name="Alice" age={26} />

      <Greatting name="Alice" />
      <MytestComponent name="Alice" optionalProp="Optional Value" />
      <Counter />
    </>
  );
}

export default App;
