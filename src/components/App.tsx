import { Counter } from "./Counter.js";
import { arch } from "./foo.cjs";

const App = ({ name = "Anonymous" }) => {
  return (
    <div style={{ border: "3px red dashed", margin: "1em", padding: "1em" }}>
      <h1>Hello {name}!!</h1>
      <h3>
        This is a server component. {process.cpuUsage().system} {arch}
      </h3>
      <Counter />
    </div>
  );
};

export default App;
