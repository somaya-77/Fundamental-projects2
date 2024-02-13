import { FaBars } from "react-icons/fa";
import { useGlobalStrapi } from './context';
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalStrapi();
  const handleSubmenu = (e) => {
    console.log(e.target);
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }
  }
  return (
    <div className="navbar" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo-nav">Strapi</h3>
        <span onClick={openSidebar} className="toggle-btn">
          <FaBars />
        </span>
        <NavLinks />
      </div>
    </div>
  )
}

export default Navbar;