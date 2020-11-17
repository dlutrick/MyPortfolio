import "./Navbar.css";

// Mobile menu toggler
const toggleMenu = () => {
  let menu = document.getElementById("menu");
  menu.classList.toggle("menu_visible");
};

function Navbar() {
  return (
    <div>
      <nav className="navigation">
        <div className="nav-top">
          <a className="logo">David Lutrick</a>
          <i
            className="fas fa-bars"
            id="hamburger_icon"
            onClick={toggleMenu}
          ></i>
        </div>
        <div className="nav_links" id="menu">
          <a href="#" className="nav_link">
            Home
          </a>
          <a href="#" className="nav_link">
            About
          </a>
          <a href="#" className="nav_link">
            Contact
          </a>
          <a href="#" className="nav_link">
            Portfolio
          </a>
          <a href="#" className="nav_link">
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
