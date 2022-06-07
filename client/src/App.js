import './App.css';
import Home from './Pages/Home';
import Employee from './Pages/Employee';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emp" element={<Employee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
