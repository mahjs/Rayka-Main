"use client"
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css'; // Import the CSS as a module

const Carousel = () => {
  const itemCount = 7; // Assuming 7 items based on your HTML
  const [positions, setPositions] = useState(Array(itemCount).fill('back-pos'));

  useEffect(() => {
    setPositions(['left-pos', 'main-pos', 'right-pos', ...Array(itemCount - 3).fill('back-pos')]);
  }, []);

  const swap = (direction: string) => {
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      if (direction === 'clockwise') {
        newPositions.unshift(newPositions.pop()!); // Move last to first
      } else {
        newPositions.push(newPositions.shift()!); // Move first to last
      }
      return newPositions;
    });
  };

  const handleClick = (pos: string) => {
    if (pos === 'left-pos') {
      swap('counter-clockwise');
    } else {
      swap('clockwise');
    }
  };

  return (
    <div className={styles.carousel3dBlock}>
      <ul className={styles.carousel3d}>
        {positions.map((pos, index) => (
          <li key={index} className={`${styles.carousel3dItem} ${styles[pos]}`} onClick={() => handleClick(pos)}>
            <p>{`Item ${index + 1}`}</p>
          </li>
        ))}
      </ul>
      <span className={styles.controlSpan}>
        <button onClick={() => swap('counter-clockwise')}>Prev</button>
        <button onClick={() => swap('clockwise')}>Next</button>
      </span>
    </div>
  );
};

export default Carousel;
