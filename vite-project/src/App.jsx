
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Registerpage from "./pages/Registerpage"
import Loginpage from "./pages/Loginpage"
import Lista from "./pages/Lista"
import RecuperarContraseña from "./pages/recuperarcontraseña"
import Resetcon from "./pages/resetcon"
import Header from "./pages/Header"



function App (){
  return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/Inicio" element={<Loginpage/>}></Route>
        <Route path="/Register" element={<Registerpage/>}></Route>
         <Route path="/Lista" element={<Lista/>}></Route>
         <Route path="/reset" element={<Resetcon/>}></Route> 
        <Route path="/recuperacion" element={<RecuperarContraseña/>}></Route> 
        </Routes>
      </BrowserRouter>
   
  )
}

export default App