import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import StyleNavbar from '../components/StyleNavbar'
function SharedLayout() {
  return (
    <>
      <StyleNavbar />
      <Outlet />
    </>
  )
}

export default SharedLayout
