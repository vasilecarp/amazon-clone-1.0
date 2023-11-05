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
            path="/login"
            element={
              <div>
                <h1>Login Page</h1>
              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Checkout />
              </div>
            }
          />
          <Route path="/" element={<Home key="home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
