'use client';

import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import Image from 'next/image';

const HeroDeviceAnimation = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start('animate');
  }, [controls]);

  const columns = 2;
  const rows = 4;
  const duration = 15;

  const getVariants = (columnIndex: number, rowIndex: number): Variants => ({
    initial: {
      y: `${120 + rowIndex * 40}%`,
      x: '0%',
      scale: 1,
      opacity: 1,
    },
    animate: {
      y: '-120%',
      x: '-100%',
      scale: 0.5,
      opacity: 0,
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        delay: columnIndex * duration * 0.25,
      },
    },
  });

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div
          key={columnIndex}
          className="absolute h-full"
          style={{
            left: `${(columnIndex / columns) * 100}%`,
            width: `${100 / columns}%`,
          }}
        >
          {Array.from({ length: rows }).map((_, rowIndex) => {
            const frameIndex = columnIndex * rows + rowIndex;
            return (
              <motion.div
                key={frameIndex}
                className="absolute"
                style={{
                  width: '180px',
                  height: '360px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                variants={getVariants(columnIndex, rowIndex)}
                initial="initial"
                animate={controls}
              >
                <Image
                  src="/placeholder.svg" // Ensure this image exists in public/
                  alt={`Device frame ${frameIndex + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-3xl shadow-lg"
                />
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default HeroDeviceAnimation;
