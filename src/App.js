import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={[<Header key="header" />, <Home key="home" />]}
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <h1>I am a Checkout page</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
