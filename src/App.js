import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home';
import Register from './component/register';
import Login from './component/login'
import ForgetPassword from './component/ForgetPassword';
import Navbar from './component/navbar';
import Footer from './component/footer';
import ResetPassword from './component/ResetPassword';
import PageNotFound from './pagNotFound404';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import OurServices from './component/OurServices';
import MenProductPage from './product/MenProductPage';
import PorductDetails from './product/PorductDetails'
import Cart from './component/Cart'
import KidProductPage from './product/KidProductPage';
import WomenProductPage from './product/WomenProductPage';

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/registration' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />} exact={true}></Route>
          <Route path='/forgetpassword' element={<ForgetPassword />}></Route>
          <Route path='/resetpassword' element={<ResetPassword /> } ></Route>  
          <Route path='/about' element={<AboutUs /> } ></Route>  
          <Route path='/contact' element={<ContactUs /> } ></Route> 
          <Route path='/services' element={<OurServices /> } ></Route>
          <Route path='/menproducts' element={<MenProductPage /> } ></Route>
          <Route path='/womenproducts' element={<WomenProductPage/> } ></Route>
          <Route path='/kidproducts' element={<KidProductPage /> } ></Route>
          <Route path='/productdetails/:slug' element={<PorductDetails /> } ></Route>
          <Route path='/cart' element={<Cart /> } ></Route>

          <Route path='*' element={<PageNotFound />}> /</Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
