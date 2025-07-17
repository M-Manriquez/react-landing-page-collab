import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
      <div className="container">
        <a href="" className="navbar-brand fw-bold">
          {props.brandname}
        </a>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-white fw-semibold">
            <li className="nav-item">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  brandlink: PropTypes.string,
  brandname: PropTypes.string,
  navlink1: PropTypes.string,
  navlink2: PropTypes.string,
  navlink3: PropTypes.string,
  navlink4: PropTypes.string,
};
export default Navbar;
