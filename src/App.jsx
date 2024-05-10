import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pacientes from './Components/Pacientes';
import Doctores from './Components/Doctores';
import Aside from './Components/Aside';

import './App.css'
import Agregardoc from './Components/Agregardoc';



function App() {
  
  return (
    
    <Router>
     <div className="min-h-screen bg-gray-200">
      <div className="md:flex min-h-screen md:align-top">
        <Aside />
        <Switch >
          <Route path="/" element={<Pacientes />} />
          <Route path="/doctores" element={<Doctores />} />
          <Route path="/agregardoc" element={<Agregardoc />} />
         
        </Switch>
      </div>
    </div>
  </Router>
    
  )
}

export default App
