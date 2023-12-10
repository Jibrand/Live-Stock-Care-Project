import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/C1";
import Footer from "./components/Footer";
import Pay from "./components/Home/Pay"
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import Forget from "./components/Authentication/Forget";
import ForgetEmail from "./components/Authentication/ForgetEmail";
import Shop from "./components/Shop/index";
import S1 from "./components/Shop/index2";
import HelpS1 from "./components/Shop/Help";
import Qw from "./components/Shop/Qw";
import Blog from "./components/Blogs/index";
import WQ from "./components/Blogs/WQ";
import Cart from "./components/Cart/index";
import Bus from "./components/Cart/Bus";
import AddressForm from './components/Checkout/Checkout'
import Dashboard from "./components/Dashboard/Dasboard_1/Dashboard";
import Dashboard1 from "./components/Dashboard/Dasboard_1/Dashboard1";
import Dashboard2 from "./components/Dashboard/Dasboard_1/Dashboard2";
import Dashboard3 from "./components/Dashboard/Dasboard_1/Dashboard3";
import Dashboard5 from "./components/Dashboard/Dasboard_1/Dashboard5";
import Dashboard6 from "./components/Dashboard/Dasboard_1/Dashboard6";
import Transactions from "./components/Dashboard/Dasboard_1/Dashboard4";
import Sent from "./components/Dashboard/Sent_fr_request_to_request";
import Completion from './Completion'
import Success from './components/Success/index'
import Fail from './components/Success/Fail'
import Dashboardq from "./components/Admin/Dashboard";
import Dashboardqq from "./components/Admin/Dashboard1";
import Dashboardqqq from "./components/Admin/Dashboard2";
import Dashboardqqqq from "./components/Admin/Dashboard3";
import HelpA from "./components/Admin/Help";
import HelpSent from "./components/Admin/helpSent";
import Login from "./components/Admin/Login";
import Tour from "./components/Tour/index";
// import Order2 from "./components/Dashboard/Dasboard_1/Order2";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleProduct from "./components/Shop/SingleProduct";
import SingleBlog from "./components/Blogs/SingleBlog";
import NavBar from "./components/Navbar";
import Upsell from './components/Admin/Upsell';


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <ScrollToTop />
          {/* <Navbar/> */}
   
            <Routes>
              <Route path="/Dashboard/:id" element={<Dashboard />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/completion" element={<Completion />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/homepay" element={<Pay />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/reset-password/:id" element={<Forget />} />
              <Route path="/Forget" element={<ForgetEmail />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/Success" element={<Success />} />
              <Route path="/canceled" element={<Fail />} />
              <Route path="/tour" element={<Tour />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/allproducts/:id" element={<S1 />} />
              <Route path="/allproductshelp/:id" element={<HelpS1 />} />
              <Route path="/SingleProduct/:id" element={<SingleProduct />} />
              <Route path="/Qw/:id" element={<Qw />} />
              <Route path="/WQ/:id" element={<WQ />} />
              <Route path="/SingleBlog/:id" element={<SingleBlog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/Bus" element={<Bus />} />
              <Route path="/AddressForm" element={<AddressForm />} />
              <Route path="/User/Dashboard/product" element={<Dashboard1 />} />
              <Route path="/User/Dashboard/product/product/:id" element={<Dashboard2 />} />
              <Route path="/User/Dashboard/product/sent/:id" element={<Sent />} />
              <Route path="/User/Dashboard/product/product/preview/:id" element={<Dashboard3 />} />
              <Route path="/User/Dashboard/product/product/upsell/:id" element={<Dashboard5 />} />
              <Route path="/User/Dashboard/product/product/deposit-request/:id" element={<Dashboard6 />} />
              <Route path="/User/Dashboard/transaction" element={<Transactions />} />
              <Route path="/Admin/Dashboard/" element={<Login />} />
              <Route path="/Admin/Dashboard/Home" element={<Dashboardq />} />
              <Route path="/Admin/Dashboard/HelpSent" element={<HelpSent />} />
              <Route path="/Admin/Dashboard/Upsell/:id" element={<Dashboardqq/>} />
              <Route path="/Admin/Dashboard/upsell/addorder/:id" element={<Dashboardqqq />} /> 
              <Route path="/Admin/Dashboard/upsell/request" element={<Dashboardqqqq />} /> 
              <Route path="/Admin/Dashboard/upsell/request/help" element={<HelpA />} /> 

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
         

        </div>
      </Router>

    </>
  );
}

export default App;
