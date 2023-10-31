import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Index from './Index';
import Home from './pages/Home';
import Papers from './pages/Papers';
import Articles from './pages/Articles';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<Index />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/articles' element={<Articles />}></Route>
        <Route path='/papers' element={<Papers />}></Route>
        <Route path='/keywords' element={<Home />}></Route>
        <Route path='/community' element={<Home />}></Route>
        <Route path='/links' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
