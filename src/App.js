import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
// import Layout from "./pages/layout";

function App() {
  return (
    <div>
      <BrowserRouter basename="/website">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
