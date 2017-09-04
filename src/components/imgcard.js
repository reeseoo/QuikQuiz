import React, { Component } from 'react';

class ImgCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {img: 'Img link'};
  }

  render() {
    return (
      <div className="img-card">
      </div>
    );
  }
}

export default ImgCard;