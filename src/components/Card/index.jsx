import React, { Component } from 'react';

import './style.scss';

class Cards extends Component {
  render() {
    const product = this.props.product;
    const price = this.props.product.price.value.toString();
    return (
      <div className='col-4 mb-3'>
        <div className='card'>
          <div className='card-body'>
            <img src={product.image} className='card-img' alt='' />
            <h5 className='card-title'>{product.name}</h5>
            <p className="price">
              {(price / 100).toFixed(2)} {product.price.currency}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;