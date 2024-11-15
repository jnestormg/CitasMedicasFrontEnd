import Form_Paciente from './components/form-pacientes';
import Navbar from './components/menu'
import MaterialTabs from './components/Tab'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/medicos" element={<MaterialTabs/>} />
        <Route path="/pacientes" element={<Form_Paciente/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
