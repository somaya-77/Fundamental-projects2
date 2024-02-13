import { FaTimes } from "react-icons/fa";
import { useGlobalStrapi } from "./context";
import sublinks from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalStrapi();

  return (
    <div className={isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"}>
      <div className="sidebar-contain">
        <span className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </span>

        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { pageId, page, links } = item;
            return (
              <div key={pageId}>
                <h4>{page}</h4>

                <div className="subLinks">
                  {links.map((link) => {
                    const {id, url, icon, label} = link;

                    return (
                      <a key={id} href={url}>{icon} {label}</a>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;