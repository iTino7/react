import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          src={this.props.img}
          className="card-img-top"
          alt={this.props.alt}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
        </div>
      </div>
    );
  }
}

export default ImageComponent;
