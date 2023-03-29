import './App.css'
import { NavBarMenu } from "./components/NavBarMenu";
import { BrowserRouter, Routes, Route } from 'react-router-dom' // npm install react-router-dom localforage match-sorter sort-by
import { Home } from './pages/Home'
//import { Login } from './pages/Login'
//import { Register } from './pages/Register'
//import { StateExample } from './pages/StateExample';
//import { Gallery } from './components/Gallery';
import { Agenda } from './pages/Agenda';
import { Galeria } from './pages/Galeria';
import BoxSx from './components/layout';

// FLUXO DE TODA APLICAÇÃO É FEITA AQUI
function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/> {/*'path' e 'element' SÃO PROPS, QUANDO ACESSO APENAS '/' É A PAG INICIAL*/}
          <Route path='/gallery' element={<Galeria/>}/>
          <Route path='/agenda' element={<Agenda/>}/>
          <Route path='/box' element={<BoxSx/>}/>
        </Routes>

        <NavBarMenu />
      </BrowserRouter>
    </div>
  )
}

export default App
