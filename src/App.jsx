import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {Home} from './components/Home';
import {Participant} from './components/participant';
import { Formateur } from "./components/formateur";
import { Ajouter } from "./components/ajouter";


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participant" element={<Participant />} />
        <Route path="/formateur" element={<Formateur />} />
        <Route path="/ajouter" element={<Ajouter/>} />
    
      </Routes>
    </Router>
    </>
  )


}

export default App;
