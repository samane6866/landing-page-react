function Card(props) {
  return (
    <>
      <div>
        <div
          className="card d-flex justify-content-center"
          style={{ width: "18rem" }}
        >
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{props.titulo}</h3>
            <p className="card-text">{props.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
