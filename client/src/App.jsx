import { NavBar } from "./assets/NavBar"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Create } from "./assets/Create"
import { Read } from "./assets/Read"
import { Update } from "./assets/Update"

const App = ()=> {

  return (
    <div>
    <BrowserRouter>
    <NavBar />   
      <Routes>
        <Route exact path="/" element={<Create/>}/>
        <Route path="/all" element={<Read/>}/>
        <Route path="/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
