import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import './main.css';
const Strapi = () => {
    
  return (
    <div>
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
    </div>
  )
}

export default Strapi;