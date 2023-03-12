import slides from './slides.conf.json';
import styles from './style.module.css';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

const handleDragStart = (e: any) => e.preventDefault();

export default function Slides() {
  const items = [
    <img
      src="https://www.nme.com/wp-content/uploads/2022/06/Wednesday-Jenna-Ortega-Matthias-Clamer-Netflix.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="https://www.nme.com/wp-content/uploads/2022/06/Wednesday-Jenna-Ortega-Matthias-Clamer-Netflix.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="https://www.nme.com/wp-content/uploads/2022/06/Wednesday-Jenna-Ortega-Matthias-Clamer-Netflix.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  return (
    <AliceCarousel
      mouseTracking
      autoPlay
      items={items}
    />
  );
}
