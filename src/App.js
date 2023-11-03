import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home key="home" />}
          />
          <Route
            path="/checkout"
            element={
              <div>                
                <Checkout />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
