
import AddData from './Components/AddData'
import Login  from './Components/Login'
import Register from './Components/Register'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Register/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/adddata'element={<AddData/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App