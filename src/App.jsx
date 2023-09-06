import { Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<Index />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
