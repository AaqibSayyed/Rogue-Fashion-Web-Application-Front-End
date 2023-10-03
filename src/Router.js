import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import LoadingIndicator from './Loader';

const Home = lazy(()=>import ('./Home'))
const Register = lazy(()=>import ('./component/Register'))
const Login = lazy(()=>import ('./component/Login'))
const ForgetPassword = lazy(()=>import ('./component/ForgetPassword'))
const Navbar = lazy(()=>import ('./component/Navbar'))
const Footer = lazy(()=>import ('./component/Footer'))
const ResetPassword = lazy(()=>import ('./component/ResetPassword'))
const PageNotFound = lazy(()=>import ('./PagNotFound404'))
const AboutUs = lazy(()=>import ('./component/AboutUs'))
const ContactUs = lazy(()=>import ('./component/ContactUs'))
const OurServices = lazy(()=>import ('./component/OurServices'))
const MenProductPage = lazy(()=>import ('./product/MenProductPage'))
const PorductDetails = lazy(()=>import ('./product/PorductDetails'))
const Cart = lazy(()=>import ('./component/Cart'))
const KidProductPage = lazy(()=>import ('./product/KidProductPage'))
const WomenProductPage = lazy(()=>import ('./product/WomenProductPage'))

function Router() {
  return (
    <>

      <Suspense fallback={<LoadingIndicator />}>
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
      </Suspense>

    </>
  );
}

export default Router;
