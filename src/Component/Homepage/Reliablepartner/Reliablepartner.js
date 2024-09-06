import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Reliablepartner.css';
import imagechandra from '../../../assest/chandra.jpeg'
import imagemarketing from '../../../assest/resized-image-Promo.jpeg';
import imagekoyoto from '../../../assest/koyoto.jpeg';
import imagefeepad from '../../../assest/feepad.jpeg';
import imagepharos from '../../../assest/pharos.jpeg';
// Define custom arrow components
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
};

// Slider settings with custom arrows
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />
};

// Slider data
const sliderData = [
  {
    id: 1,
    image: imagekoyoto,
    title: 'Koyoto Japan',
    description: ''
  },
  {
    id: 2,
    image:imagechandra,
    title: 'Chandrasekhar Academy Japan',
    description: ''
  },
  {
    id: 3,
    image: imagepharos,
    title: 'Pharos Tech solution',
    description: ''
  },
  {
    id: 4,
    image: imagemarketing,
    title: 'Marketing Guru,Berhampur',
    description: 'odisha'
  },
  {
    id: 5,
    image: imagefeepad,
    title: 'FeePad,Hyderbad',
    description: 'Telangana'
  },
];

// Slider component
const SliderComponent = () => {
  return (
    <div>
    <h1>Our Reliable Partners</h1>
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className="slider-item">
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default SliderComponent;