import NavBar from './NavBar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode;
  orderQuantity: number;
}

export default function Layout({ children, orderQuantity }: LayoutProps) {
  return (
    <>
      <NavBar orderQuantity={orderQuantity} />
      {children}
      <Footer />
    </>
  )
}