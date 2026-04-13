import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path ='/about' element ={<About/>}/>
          <Route path ='/contact' element ={<Contact/>}/>
        </Route>
      </Routes>
      
    </>
      
  )
}

export default App;
