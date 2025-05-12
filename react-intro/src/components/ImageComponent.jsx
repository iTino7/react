import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <img src={this.props.img} className="card-img-top" alt={this.props.alt} />
    );
  }
}

export default ImageComponent;
