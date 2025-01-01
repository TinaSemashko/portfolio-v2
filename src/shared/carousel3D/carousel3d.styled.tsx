import { styled } from '@mui/material/styles';
import PrimaryButton from '../primaryButton';

export const MainContainer = styled('div')<{ carouselWith: number }>`
  position: relative;
  width: ${props => props.carouselWith + 2}vw;
  margin: 2vw auto 0 auto;
  perspective: 1000px;

  @media (max-width: 900px) {
    width: ${props => (props.carouselWith + 2) * 1.2}vw;
  }

  @media (max-width: 568px) {
    width: ${props => (props.carouselWith + 2) * 1.4}vw;
  }
`;

export const StyledButtonCarousel = styled(PrimaryButton)`
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  width: 8vw;
  height: 3vh;
  grid-column: 2 / span 4;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.colorBlue.main};
  text-transform: uppercase;
`;

export const CarouselContainer = styled('div')<{ isAnimationPaused: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  /* transform: rotateY(-360deg) translateZ(-412px); add reverse transformation from the slides */

  animation: ${({ isAnimationPaused }) => (isAnimationPaused ? 'none' : 'swirl 40s steps(10000, end) infinite')};

  @keyframes swirl {
    from {
      transform: rotateY(-360deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
`;

export const Slide = styled('div')<{
  degY: number;
  radius: number;
  carouselWith: number;
}>`
  position: absolute;
  top: 10px;
  left: 10px;
  width: ${props => props.carouselWith}vw;
  height: ${props => props.carouselWith}vh;
  transform: rotateY(${props => props.degY}deg) translateZ(${props => props.radius}vw);

  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 23% 23% 23% 10%;
  grid-gap: 1%;
  place-items: center;
  justify-items: center;

  @media (max-width: 900px) {
    width: ${props => props.carouselWith * 1.2}vw;
    height: ${props => props.carouselWith * 0.7}vh;
    transform: rotateY(${props => props.degY}deg) translateZ(${props => props.radius * 1.2}vw);
  }

  @media (max-width: 568px) {
    width: ${props => props.carouselWith * 1.3}vw;
    height: ${props => props.carouselWith * 0.6}vh;
  }

  @media (max-width: 300px) {
    height: ${props => props.carouselWith * 0.5}vh;
  }
`;

export const Picture = styled('img')<{ carouselWith: number; commercial: boolean }>`
  width: ${props => props.carouselWith}vw;
  height: ${props => props.carouselWith * 1.4}vh;
  border: solid 4px;
  border-color: ${({ theme, commercial }) =>
    commercial ? theme.palette.primary.main : theme.palette.colorOrange.main};
  border-style: ridge;

  box-shadow: 0 0 15px 3px ${({ theme }) => theme.palette.colorBlue.main};

  grid-column: 1 / span 4;
  grid-row: 1 / span 4;
  position: relative;

  @media (max-width: 900px) {
    width: ${props => props.carouselWith * 1.2}vw;
    height: ${props => props.carouselWith * 1.4 * 0.7}vh;
  }

  @media (max-width: 568px) {
    width: ${props => props.carouselWith * 1.2}vw;
    height: ${props => props.carouselWith * 1.4 * 0.6}vh;
  }

  @media (max-width: 300px) {
    height: ${props => props.carouselWith * 1.4 * 0.5}vh;
  }
`;

/*
9 Slides total: 360 Degrees (full circle) --> 360/9 = 40 --> our increment for rotation

Some math. Consider how the carousel will be set up. It's going to be a 3D circle, like an orbit. The orientation will be such that it would be like setting a ring down on a table, then bending down and looking at the ring head on from the edge of the table. The main "front" image will be entirely front-facing. The other images will be rotated slightly to make a full circle. You could sketch this out in 2D from a bird's eye view, and you'd end up with a picture like the following:

https://cl.ly/image/2P3E1U0W0c29

Each triangle/piece would be a slide, hence 9 pieces. That being said, let's do some calculations, but we'll use the dimensions of our elements rather than those in the picture.

So, we're rotating all the slides in 40º increments relative to each other, because 360º makes a full circle, and we have 9 elements: 360/9 = 40

In the picture above, we want to find the radius of the circle (which isn't exactly a circle because it's made up of triangles). So we can cut each triangle in half and solve for `r` (radius). We can solve for `r` using some geometry and our own elements' dimensions. 

The width of the slides is 300px. We're going to split those triangles in half and use the TANGENT function in geometry/trigonemty to solve for `r`. And since we're splitting each of the 9 triangles (the slides) in half for this, we need to account for the fact that our key angle is now going to be 20º and not 40º. We can solve for `r` by taking our smaller triangles' width (150px) and dividing by the tangent of 20º (in degrees, not radians). So:

            150
   r =  -----------
          tan(20º)

Here's a screenshot of me doing the calculations in JavaScript, right in the browser console!

Math things: https://cl.ly/image/1t0j1V2Y2l2Z

So, `r` is (about) 412px long! This means we need to TRANSLATE the slides in the Z 3-dimensional plane by 412px. This should be done AFTER the rotateY transformation.
*/
