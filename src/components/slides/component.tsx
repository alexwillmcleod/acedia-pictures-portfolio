import slides from './slides.conf.json';
import styles from './style.module.css';
import { useEffect, useState } from 'react';

const handleDragStart = (e: any) => e.preventDefault();

export default function Slides() {
  const items = [
    <img src="https://www.nme.com/wp-content/uploads/2022/06/Wednesday-Jenna-Ortega-Matthias-Clamer-Netflix.jpg" />,
    <img src="https://www.nme.com/wp-content/uploads/2022/06/Wednesday-Jenna-Ortega-Matthias-Clamer-Netflix.jpg" />,
    <img src="https://www.nme.com/wp-content/uploads/2022/06/Wednesday-Jenna-Ortega-Matthias-Clamer-Netflix.jpg" />,
  ];
  const [currentItem, setCurrentItem] = useState(0);
  return <></>;
}
