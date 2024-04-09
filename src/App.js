import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ReactQueryPage from "./ReactQueryPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: "beige", padding: "20px" }}>
        <Link to={"/"} style={{ marginRight: "10px" }}>
          HomePage
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
