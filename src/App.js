import logo from "./logo.svg";
import "./App.css";
import AppBar from "./Components/AppBar";
import "./style.css";
import Shipping from "./Components/Shipping";
import Payment from "./Components/Payment";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <AppBar />
      <Home />
    </div>
  );
}

export default App;
