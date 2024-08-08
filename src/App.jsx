import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Blog from "./pages/Blog";
import HouseHoldAppliance from "./pages/HouseHoldAppliance";
import OrderHistory from "./pages/OrderHistory";
import TrendingProducts from "./pages/TrendingProducts";
import TopProducts from "./components/TopProducts/TopProducts";
import ElectricDevices from "./pages/ElectricDevices";
import Products from "./components/Products/Products";
import Subscribe from "./components/Subscribe/Subscribe";
import Signup from "./components/Registerion/Signup";
import Signin from "./components/Registerion/Signin";
import Dashboard from './admin/Dashboard';
import ManageProducts from './admin/ManageProducts';
import ManageOrders from './admin/ManageOrders';
import ManageUsers from './admin/ManageUsers';
import ManagePayments from './admin/ManagePayments';
// import Test from "./components/test";

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroWithNavAndFooter />} />
        <Route path="/blog" element={<BlogWithNavAndFooter />} />
        <Route path="/electric-devices" element={<ElectricDevicesWithNavAndFooter />} />
        <Route path="/household-appliance" element={<HouseHoldApplianceWithNavAndFooter />} />
        <Route path="/order-history" element={<OrderHistoryWithNavAndFooter />} />
        <Route path="/trending-products" element={<TrendingProductsWithNavAndFooter />} />
        <Route path="/top-rated" element={<TopProductsWithNavAndFooter />} />
        <Route path="/best-selling" element={<ProductsWithNavAndFooter />} />
        <Route path="/contact" element={<SubscribeWithNavAndFooter />} />
        <Route path="/signup" element={<SignupWithoutNavAndFooter />} />
        <Route path="/signin" element={<SigninWithoutNavAndFooter />} />
        <Route path="/admin" element={<DashboardWithoutNavAndFooter />} />
        <Route path="/admin/manage-products" element={<ManageProductsWithoutNavAndFooter />} />
        <Route path="/admin/manage-orders" element={<ManageOrdersWithoutNavAndFooter />} />
        <Route path="/admin/manage-users" element={<ManageUsersWithoutNavAndFooter />} />
        <Route path="/admin/manage-payments" element={<ManagePaymentsWithoutNavAndFooter />} />
      </Routes>
    </Router>
  );
};

const HeroWithNavAndFooter = () => (
  <>
    <Navbar />
    <Hero />
    <Footer />
  </>
);

const BlogWithNavAndFooter = () => (
  <>
    <Navbar />
    <Blog />
    <Footer />
  </>
);

const ElectricDevicesWithNavAndFooter = () => (
  <>
    <Navbar />
    <ElectricDevices />
    <Footer />
  </>
);

const HouseHoldApplianceWithNavAndFooter = () => (
  <>
    <Navbar />
    <HouseHoldAppliance />
    <Footer />
  </>
);

const OrderHistoryWithNavAndFooter = () => (
  <>
    <Navbar />
    <OrderHistory />
    <Footer />
  </>
);

const TrendingProductsWithNavAndFooter = () => (
  <>
    <Navbar />
    <TrendingProducts />
    <Footer />
  </>
);

const TopProductsWithNavAndFooter = () => (
  <>
    <Navbar />
    <TopProducts />
    <Footer />
  </>
);

const ProductsWithNavAndFooter = () => (
  <>
    <Navbar />
    <Products />
    <Footer />
  </>
);

const SubscribeWithNavAndFooter = () => (
  <>
    <Navbar />
    <Subscribe />
    <Footer />
  </>
);

const SignupWithoutNavAndFooter = () => <Signup />;
const SigninWithoutNavAndFooter = () => <Signin />;
const DashboardWithoutNavAndFooter = () => <Dashboard />;
const ManageProductsWithoutNavAndFooter = () => <ManageProducts />;
const ManageOrdersWithoutNavAndFooter = () => <ManageOrders />;
const ManageUsersWithoutNavAndFooter = () => <ManageUsers />;
const ManagePaymentsWithoutNavAndFooter = () => <ManagePayments />;

export default App;





// function App() {
//   return (
//     <div>
//       <Test/>
//     </div>
//   );
// }

// export default App;
