
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Registerpage from "./pages/Registerpage"
import Loginpage from "./pages/Loginpage"
import Home from "./pages/Home"
import Lista from "./pages/Lista"
import RecuperarContraseña from "./pages/recuperarcontraseña"



function App (){
  return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Inicio" element={<Loginpage/>}></Route>
        <Route path="/Register" element={<Registerpage/>}></Route>
         <Route path="/Lista" element={<Lista/>}></Route>
        <Route path="/Recuperacion" element={<RecuperarContraseña/>}></Route>
        <Route path="/" element={<h1>Home page</h1>}></Route> 
        </Routes>
      </BrowserRouter>
   
  )
}

export default App