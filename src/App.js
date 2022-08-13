import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokedexPage from './pages/Home'



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokedexPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

