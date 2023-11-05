import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={
              <div>
                <Login />
                <h1>Login Page</h1>
              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
