import React from 'react';
import './Business.css';

class Business extends React.Component {

  render() {
    // UNCOMMENT
    // console.log(this.props.business.urlYelp)
    return (
      <div className="Business">
      <div className="image-container">
        <a href={this.props.business.urlYelp}><img src={this.props.business.imageSrc} alt=''/></a>
      </div>
      <h2>{this.props.business.name}</h2>
      <div className="Business-information">
        <a href={this.props.business.urlGoogleMaps}>
          <div className="Business-address" >
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
          </div>
        </a>
        <div className="Business-reviews">
          <h3>{this.props.business.category}</h3>
          <h3 className="rating">{this.props.business.rating}</h3>
          <p>{this.props.business.reviewCount}</p>
        </div>
      </div>
      </div>
    )
  }
}

export default Business;
