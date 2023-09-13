import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carousels from "./Components/Carousels";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Carousels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
