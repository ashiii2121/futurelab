import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import page components
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkups from './pages/Checkups';
import Package from './pages/Package';
import Product from './pages/Product';
import SingleTest from './pages/SingleTest';
import WomanCare from './pages/WomanCare';
import MenCare from './pages/MenCare';
import SpecialCare from './pages/SpecialCare';
import VitalOrgan from './pages/VitalOrgan';
import LifestyleCheckup from './pages/LifestyleCheckup';
import Sitemap from './pages/Sitemap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ErrorPage from './pages/ErrorPage';

// Import shared components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkups" element={<Checkups />} />
          <Route path="/package" element={<Package />} />
          <Route path="/product" element={<Product />} />
          <Route path="/single-test" element={<SingleTest />} />
          <Route path="/woman-care" element={<WomanCare />} />
          <Route path="/men-care" element={<MenCare />} />
          <Route path="/special-care" element={<SpecialCare />} />
          <Route path="/vital-organ" element={<VitalOrgan />} />
          <Route path="/lifestyle-health-checkup" element={<LifestyleCheckup />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
