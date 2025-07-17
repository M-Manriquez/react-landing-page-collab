import PropTypes from "prop-types";

const Footer = ({ description }) => {
  return (
    <footer className="bg-secondary text-white py-3 mt-4">
      <div className="container text-center">
        <small>{description}</small>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  description: PropTypes.string,
};


export default Footer;
