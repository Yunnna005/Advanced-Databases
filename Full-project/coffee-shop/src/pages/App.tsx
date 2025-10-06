import Layout from '../layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';

import Home from './Home';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
