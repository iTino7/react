import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

const Card = () => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card mt-3 ms-5" style={{ width: "18rem" }}>
          <ImageComponent
            img="https://www.autoscout24.it/cms-content-assets/7D9mKZlCtwKo06tNq8KZTE-623552c2c6e561cf0b32e47c3fefdf46-Mercedes-A-Klasse-2023-AMG-Hero-1100.jpg"
            alt="Mercedes classe A"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <ButtonComponent
              title="scopri di più"
              className="btn btn-success"
            />
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card mt-3 ms-5  " style={{ width: "18rem" }}>
          <ImageComponent img="https://www.autoscout24.it/cms-content-assets/3EiC4oHLrxbuGxHCtppxRs-1a7ee5cda36ff38b2f7930178ab6605e-BMW-740d-xDrive-Titelbild-1100.jpg" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <ButtonComponent title="elimina" className="btn btn-danger" />
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card mt-3 ms-5 " style={{ width: "18rem" }}>
          <ImageComponent img="https://www.inrent.it/wp-content/uploads/2023/02/Renegade-e1710755448750.jpg" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <ButtonComponent title="reset" className="btn btn-warning" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
