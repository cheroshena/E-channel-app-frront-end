import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Doctor from './pages/Doctor';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import { SingleProduct } from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SingleDoctor from './pages/SingleDoctor';
import Book from './pages/Book';
import Checkoutdoc from './pages/Checkoutdoc';
import { PrivateRoutes } from './routing/PrivateRoutes';
import { OpenRoutes } from './routing/OpenRoutes';
import Orders from './pages/Orders';
import Channels from './pages/Channels';
import Profile from './pages/Profile';
import Chat from './components/chat';


function App() {
  return <>
  <Chat/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='product' element={<OurStore />} />
          <Route path='product/:id' element={<SingleProduct />} />
          <Route path='doctor' element={<Doctor />} />
          <Route path='doctor/:id' element={<SingleDoctor />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<SingleBlog />} />
          <Route path='compare-product' element={<CompareProduct />} />
          <Route path='wishlist' element={<PrivateRoutes><Wishlist /></PrivateRoutes>} />
          <Route path='login' element={<OpenRoutes><Login /></OpenRoutes>} />
          <Route path='forgot-password' element={<Forgotpassword />} />
          <Route path='signup' element={<OpenRoutes><Signup /></OpenRoutes>} />
          <Route path='reset-password/:token' element={<Resetpassword />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='shipping-policy' element={<ShippingPolicy />} />
          <Route path='term-conditions' element={<TermAndCondition />} />
          <Route path='cart' element={<PrivateRoutes><Cart /></PrivateRoutes>} />
          <Route path='my-orders' element={<PrivateRoutes><Orders /></PrivateRoutes>} />
          <Route path='my-profile' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
          <Route path='book' element={<PrivateRoutes><Book /></PrivateRoutes>} />
          <Route path='my-channels' element={<PrivateRoutes><Channels /></PrivateRoutes>} />
          <Route path='checkout' element={<PrivateRoutes><Checkout /></PrivateRoutes>} />
          <Route path='checkoutdoc' element={<PrivateRoutes><Checkoutdoc /></PrivateRoutes>} />


        </Route>
      </Routes>

    </BrowserRouter>
  </>
}

export default App;
