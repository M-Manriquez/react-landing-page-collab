
const contentCard = (props) => {
    return (
        <>
            <div className="card m-5" style={{ width: "18rem" }}>
                <img className="card-img-top" src={props.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>

                    <p className="d-inline-flex gap-1">
                        <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Read more
                        </a>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

contentCard.propTypes = {
image: PropTypes.string,
imageAlt: PropTypes.string,
title: PropTypes.string,
descrption: PropTypes.string
}

export default contentCard;