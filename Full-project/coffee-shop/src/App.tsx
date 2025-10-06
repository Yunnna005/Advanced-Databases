import { useState } from 'react';
import Footer from './components/Footer'
import Hero from './components/Hero'
import Menu from './components/Menu'
import NavBar from './components/NavBar'
import Toast from './components/Toast';


function App() {
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToOrder = () => {
    setOrderQuantity((prev: number) => prev + 1);
    setToastMessage("Item was added to the order.");
  };

  const handleToastClose = () => setToastMessage("");

  return (
    <>
      <NavBar orderQuantity={orderQuantity}/>
      <Hero />
      <Menu onAddToOrder={handleAddToOrder}/>
      {toastMessage && <Toast onClose={handleToastClose} />}
      <Footer />
    </>
  )
}

export default App
