import { useState } from 'react';
import Hero from '../layout/Hero'
import Menu from '../layout/Menu'
import Toast from '../components/Toast';
import Layout from '../layout/Layout';


function App() {
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToOrder = () => {
    setOrderQuantity((prev: number) => prev + 1);
    setToastMessage("Item was added to the order.");
  };

  const handleToastClose = () => setToastMessage("");

  return (
    <Layout orderQuantity={orderQuantity}>
      <Hero />
      <Menu onAddToOrder={handleAddToOrder}/>
      {toastMessage && <Toast onClose={handleToastClose} />}
    </Layout>
  )
}

export default App
