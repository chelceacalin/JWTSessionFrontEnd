import "./App.css";
import Login from "./components/Authentication/Login";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import SensitiveData from "./components/protectedRouteTest/SensitiveData";
import { LoginProvider } from "./utils/LoginContext";
import AdminOnlyRoute from "./utils/AdminOnlyRoute";
function App() {
  return (
    <>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} exact />

            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>

            <Route element={<AdminOnlyRoute />}>
              <Route path="/sensitive" element={<SensitiveData />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </>
  );
}

export default App;
