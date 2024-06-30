import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import { AuthProvider } from './context/AuthContext';
import Navbar from "./Compoments/Navbar";


const App = () => {
  return (
    <>
     <AuthProvider>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
     </AuthProvider>
    </>
  );
};

export default App;
