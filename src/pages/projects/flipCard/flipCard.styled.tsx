import styled, { css } from 'styled-components';

interface MainContainerProps {
  flipped: boolean;
}

export const MainContainer = styled.div<MainContainerProps>`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;

  position: relative;
  width: 49%;
  height: 100%;
  perspective: 1000px;
  box-shadow: 10px 10px 12px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s, background-color 0.5s;

  ${props =>
    props.flipped &&
    css`
      transform: rotateY(-180deg);
    `}

  @media (max-width: 760px) {
    width: 100%;

    box-shadow: none;
  }
`;

export const Front = styled('div')`
  width: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  grid-column: 1;
  grid-row: 1;
`;

export const Picture = styled('img')`
  border-style: ridge;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  width: 100%;
`;

export const Back = styled('div')`
  width: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: rotateY(-180deg);
  grid-column: 1;
  grid-row: 1;
`;
