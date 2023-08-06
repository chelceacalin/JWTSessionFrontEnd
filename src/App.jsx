import "./App.css";
import Login from "./components/Authentication/Login";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import SensitiveData from "./components/protectedRouteTest/SensitiveData";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/sensitive" element={<SensitiveData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
