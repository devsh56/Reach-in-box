import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Componenets/MainPage';
import RightSection from './Componenets/RightSection';
import Login from './pages/Login';
import OneBox from './pages/OneBox';
import Signin from './pages/Signin';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign' element={<Signin/>}/>
          <Route path='/' element={<OneBox/>}/>
          <Route path='/right' element={<RightSection/>}/>
          <Route path='/main' element={< MainPage />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App