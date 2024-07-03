import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import { AuthProvider } from './context/AuthContext';
import Navbar from "./Compoments/Navbar";
import Login from "./pages/Login"

const App = () => {
  return (
    <>
     <AuthProvider>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

        </Routes>
      </BrowserRouter>
     </AuthProvider>
    </>
  );
};

export default App;
