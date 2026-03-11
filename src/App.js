
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignIn from './components/SignIn';
import SignUp from './components/Signup';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import MpesaPayment from './components/MpesaPayment';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header bg-success">
        <h1 className='display-3 text center p-3 fw-bold text-light'>SokoGarden-Buy and Sell online</h1>
      </header>
      <NavBar/>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<GetProducts />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AddProducts" element={<AddProducts/>} />
        <Route path="/MpesaPayment" element={<MpesaPayment/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
