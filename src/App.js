// import './App.css';

import {
  BrowserRouter, 
  Routes,
  Route
  } from "react-router-dom"
import { SelectorProvider } from "./components/conext/SelectorContext/SelectorContext";

import Home from "./pages/menu/Home";

function App() {
  return (
    <BrowserRouter>
      <SelectorProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </SelectorProvider>
    </BrowserRouter>
  );
}

export default App;
