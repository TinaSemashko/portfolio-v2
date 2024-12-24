import { useMediaQuery } from '@mui/material';
import CanvasSpriteAnimator from '../../../shared/canvasSpriteAnimator/canvasSpriteAnimator';
import { theme } from '../../../app/app';
import img from '../../../images/spritesheet.png';

import * as S from './walkingCat.styled';

const WalkingCat: React.FC = () => {
  const MDScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <S.MainContainer>
      <CanvasSpriteAnimator
        spriteSheet={img} // Путь к вашему листу спрайтов
        frameCount={8} // Количество кадров в анимации
        frameWidth={160} // Ширина одного кадра
        frameHeight={110} // Высота одного кадра
        fps={4} // Частота кадров в секунду
        speed={6} // Скорость движения кота
        widthPercentage={MDScreen ? '80%' : '100%'} // Процентное значение ширины канваса
      />
    </S.MainContainer>
  );
};

export default WalkingCat;
