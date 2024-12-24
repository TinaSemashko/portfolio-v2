import React, { useRef, useEffect } from 'react';
import useWindowSize from '../useWindowSize/useWindowSize';
import styled from 'styled-components';

interface CanvasSpriteAnimatorProps {
  spriteSheet: string;
  frameCount: number;
  frameWidth: number;
  frameHeight: number;
  fps: number;
  speed: number;
  widthPercentage?: string;
}

const ResponsiveCanvas = styled.canvas<{ widthPercentage?: string }>`
  width: ${({ widthPercentage }) => widthPercentage || '100%'};
  max-width: 100%;
  object-fit: contain;
`;

const CanvasSpriteAnimator: React.FC<CanvasSpriteAnimatorProps> = ({
  spriteSheet,
  frameCount,
  frameWidth,
  frameHeight,
  fps,
  speed,
  widthPercentage,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width } = useWindowSize(false);
  let xPos = width - frameWidth; // Начальная позиция по X
  let movingRight = false; // Начальное направление движения

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const spriteImage = new Image();
    spriteImage.src = spriteSheet;
    let currentFrame = 0;
    let lastUpdateTime = 0;
    const updateInterval = 1000 / fps;

    const animate = (time: number) => {
      if (!lastUpdateTime) {
        lastUpdateTime = time;
      }
      const deltaTime = time - lastUpdateTime;

      if (deltaTime > updateInterval) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Обновляем позицию кота и проверяем, не достиг ли он края канваса
        if (movingRight) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          xPos += speed;
          if (xPos + frameWidth >= width) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            movingRight = false;
          }
        } else {
          xPos -= speed;
          if (xPos <= 0.01 * width) {
            movingRight = true;
          }
        }

        // Если кот идет влево, отражаем кадр спрайта по горизонтали
        if (movingRight) {
          context.save();
          context.scale(-1, 1);
          context.drawImage(
            spriteImage,
            currentFrame * frameWidth,
            0,
            frameWidth,
            frameHeight,
            -xPos - frameWidth,
            0,
            frameWidth,
            frameHeight,
          );
          context.restore();
        } else {
          context.drawImage(
            spriteImage,
            currentFrame * frameWidth,
            0,
            frameWidth,
            frameHeight,
            xPos,
            0,
            frameWidth,
            frameHeight,
          );
        }

        currentFrame = (currentFrame + 1) % frameCount;
        lastUpdateTime = time;
      }

      requestAnimationFrame(animate);
    };

    spriteImage.onload = () => {
      requestAnimationFrame(animate);
    };

    return () => {
      lastUpdateTime = 0; // Сброс времени при размонтировании компонента
    };
  }, [spriteSheet, frameCount, frameWidth, frameHeight, fps, speed]);

  return <ResponsiveCanvas ref={canvasRef} width={width} height={frameHeight} widthPercentage={widthPercentage} />;
};

export default CanvasSpriteAnimator;
