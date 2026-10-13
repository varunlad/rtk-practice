import Counter from "./component/Counter";
import Greatting from "./component/Greatting";

function App() {
  return (
    <>
      <Greatting name="Alice" age={26} />

      <Greatting name="Alice" />
      <Counter />
    </>
  );
}

export default App;
