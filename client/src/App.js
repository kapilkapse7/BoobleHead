import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from "./Pages/Shop";
import ShopCategory from './Pages/ShopCategory';
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kids_banner from "./Components/Assets/banner_kids.png"


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {< Shop />} />
      <Route path='/Anime' element = {< ShopCategory banner={men_banner} category="Anime" />} />
      <Route path='/Charchaters' element = {< ShopCategory banner = {women_banner} category="Charchaters" />} />
      <Route path='/Idols' element = {< ShopCategory banner={kids_banner} category="Idols" />} />
      <Route path='/product' element= {< Product />}>
        <Route path=':productID' element={< Product />} />
      </Route>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/login' element={<LoginSignup />} />
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
