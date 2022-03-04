import "./styles.css";
// import Counter from "./components/Counter";
import Counter from "./components/ReduxToolKitCounter";
// import Counter from "./components/CounterClassBased"
import LogInPortal from "./components/LogInPortal";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <LogInPortal />
    </div>
  );
}
