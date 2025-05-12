import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function Main() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row ">
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 align-items-center d-flex flex-column">
          <ImageComponent img="https://www.autoscout24.it/cms-content-assets/7D9mKZlCtwKo06tNq8KZTE-623552c2c6e561cf0b32e47c3fefdf46-Mercedes-A-Klasse-2023-AMG-Hero-1100.jpg" />
          <ButtonComponent
            className="d-flex flex-column btn btn-success"
            title="Scopri di più"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 align-items-center d-flex flex-column">
          <ImageComponent img="https://www.autoscout24.it/cms-content-assets/3EiC4oHLrxbuGxHCtppxRs-1a7ee5cda36ff38b2f7930178ab6605e-BMW-740d-xDrive-Titelbild-1100.jpg" />
          <ButtonComponent
            className="d-flex flex-column btn btn-danger"
            title="Elimina"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 align-items-center d-flex flex-column">
          <ImageComponent img="https://cdnwp.dealerk.com/ea42991a/uploads/sites/3/2024/01/k4a9728ferrari_v3-1-1024x683.jpg" />
          <ButtonComponent
            className="d-flex flex-column btn btn-warning"
            title="Modifica"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
