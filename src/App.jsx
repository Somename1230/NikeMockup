import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Components/Header';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Footer from './Components/Footer';
import Checkout from './Components/Cart/Checkout';
import { CartProvider } from './Components/Cart/CartContext';
import PageWrapper from './Components/PageWrapper';
import Map from './Components/Map';

function App() {
const location = useLocation();

  return (
    <>
  <CartProvider>
      <div className="bg-neutral-900 min-h-screen text-white font-jost text-2xl">
<Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Page1 />
                  <Page2 />
                  <Page3 />
                  <Map />
                  <Footer />
                </PageWrapper>
              }
            />
            <Route
              path="/checkout"
              element={
                <PageWrapper>
                  <Checkout />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </CartProvider>
    </>
  )
}

export default App
