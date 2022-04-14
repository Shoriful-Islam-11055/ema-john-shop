import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import Register from './Components/Register/Register';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Shop></Shop>}></Route>
        <Route path='/shop' element = {<Shop></Shop>}></Route>
        <Route path='/order' element = {<Order></Order>}></Route>
        <Route path='/inventory' element = {<Inventory></Inventory>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/register' element = {<Register></Register>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
