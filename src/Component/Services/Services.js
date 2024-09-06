import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css'
import Header from '../Homepage/Header/Header';
import Servicecard from './Servicecard/Servicecard';

const Services = () => {
  return (
    <div>
      <Header/>
      <div>
        <Servicecard/>
      </div>
   
    </div>
  );
};

export default Services;