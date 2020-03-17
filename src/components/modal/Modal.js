import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillMount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = ({ key }) => {
    if (key === "Escape") {
      this.props.onClose();
    }
  };

  closeOnClick = e => {
    if (e.target !== e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { url } = this.props;
    console.log("this.props", this.props);
    return (
      <div className="Overlay">
        <div onClick={this.closeOnClick} className="Modal">
          <img src={url} alt="not available" />
        </div>
      </div>
    );
  }
}

export default Modal;
