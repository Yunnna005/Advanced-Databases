import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import Layout from './layout/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>,
)
