import { useState } from 'react';
import Footer from './components/Footer'
import Hero from './components/Hero'
import Menu from './components/Menu'
import NavBar from './components/NavBar'


function App() {
  const [orderQuantity, setOrderQuantity] = useState(0);

  const handleAddToOrder = () => {
    setOrderQuantity((prev: number) => prev + 1);
  };

  return (
    <>
      <NavBar orderQuantity={orderQuantity}/>
      <Hero />
      <Menu onAddToOrder={handleAddToOrder}/>
      <Footer />
    </>
  )
}

export default App
