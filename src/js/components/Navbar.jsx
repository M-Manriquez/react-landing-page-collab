import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
      <div className="container">
        <a href={props.brandlink} className="navbar-brand fw-bold">
          {props.brandname}
        </a>
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-auto text-white">
            <li>
              <a href={props.navlink1}>Home</a>
            </li>
            <li>
              <a href={props.navlink2}>About</a>
            </li>
            <li>
              <a href={props.navlink3}>Services</a>
            </li>
            <li>
              <a href={props.navlink4}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.PropTypes = {
  brandlink: PropTypes.string,
  brandname: PropTypes.string,
  navlink1: PropTypes.string,
  navlink2: PropTypes.string,
  navlink3: PropTypes.string,
  navlink4: PropTypes.string,
};
export default Navbar;
