import PropTypes from "prop-types";

const Jumbotron = (props) => {
  return (
    <div className="pt-4 p-3">
      <div className="container py-5 bg-light">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button className="bg-primary text-white border-0 p-2">
          Call to action!
        </button>
      </div>
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Jumbotron;
