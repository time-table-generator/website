import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
// import Layout from "./pages/layout";
import FeaturesPage from "../src/pages/featuresPage";
import MainPage from '../src/pages/mainPage';

function App() {
  return (
    <div>
      <BrowserRouter basename="/website">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/features' element={<FeaturesPage/>} />          
          <Route path='/main' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
