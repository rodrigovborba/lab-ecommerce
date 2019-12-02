import React, { Component } from 'react';
import Cards from './components/Card'
import './App.css';

const products = [
  {
    "name": "Herschel Little America Backpack",
    "image": "https://herschel.eu/content/dam/herschel/products/10014/10014-00001-OS_01.jpg.sthumbnails.1000.1250.jpg",
    "colors": 53,
    "unitsLeft": 15,
    "price": {
      "value": 10999,
      "currency": "EUR"
    }
  },
  {
    "name": "Settlement Backpack",
    "image": "https://herschel.eu/content/dam/herschel/products/10005/10005-00001-OS_01.jpg.sthumbnails.1000.1250.jpg",
    "colors": 63,
    "unitsLeft": 12,
    "price": {
      "value": 6999,
      "currency": "EUR"
    }
  },
  {
    "name": "Pop Quiz Backpack",
    "image": "https://herschel.eu/content/dam/herschel/products/10011/10011-00001-OS_01.jpg.sthumbnails.1000.1250.jpg",
    "colors": 86,
    "unitsLeft": 43,
    "price": {
      "value": 8999,
      "currency": "EUR"
    }
  },
  {
    "name": "Herschel Little America | Mid-Volume",
    "image": "https://herschel.eu/content/dam/herschel/products/10020/10020-00919-OS_01.jpg.sthumbnails.1000.1250.jpg",
    "colors": 64,
    "unitsLeft": 12,
    "price": {
      "value": 10999,
      "currency": "EUR"
    }
  },
  {
    "name": "Settlement Backpack | Mid-Volume",
    "image": "https://herschel.eu/content/dam/herschel/products/10033/10033-00001-OS_01.jpg.sthumbnails.1000.1250.jpg",
    "colors": 37,
    "unitsLeft": 42,
    "price": {
      "value": 6999,
      "currency": "EUR"
    }
  },
  {
    "name": "Heritage Backpack",
    "image": "https://herschel.eu/content/dam/herschel/products/10007/10007-00535-OS_01.jpg.sthumbnails.1000.1250.jpg",
    "colors": 32,
    "unitsLeft": 85,
    "price": {
      "value": 6999,
      "currency": "EUR"
    }
  },
  {
    "name": "Retreat Backpack",
    "image": "https://herschel.eu/content/dam/herschel/products/10066/10066-00535-OS_01.jpg.sthumbnails.1000.1250.jpg",
    "colors": 13,
    "unitsLeft": 89,
    "price": {
      "value": 8999,
      "currency": "EUR"
    }
  },
  {
    "name": "Classic Backpack | XL",
    "image": "https://herschel.eu/content/dam/herschel/products/10492/10492-00001-OS_01.jpg.sthumbnails.1000.1250.jpg",
    "colors": 34,
    "unitsLeft": 75,
    "price": {
      "value": 6499,
      "currency": "EUR"
    }
  },
  {
    "name": "Heritage Backpack | Mid-Volume",
    "image": "https://herschel.eu/content/dam/herschel/products/10019/10019-00006-OS_01.jpg.sthumbnails.1000.1250.jpg",
    "colors": 34,
    "unitsLeft": 12,
    "price": {
      "value": 6999,
      "currency": "EUR"
    }
  }
];

class App extends Component {
  render() {
  return (
    <div className="div-cards">
      {products.map(product => {
        return <Cards product={product} />;
      })}
    </div>
      ); 
    }
  }
export default App;