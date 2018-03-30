import styled, { keyframes } from 'styled-components';
import { black } from '../../theme/variables';

const load = keyframes`
  0% {
    box-shadow: 0 -.83em 0 -.4em, 0 -.83em 0 -.42em, 0 -.83em 0 -.44em, 0 -.83em 0 -.46em, 0 -.83em 0 -.477em;
  }

  38% {
    box-shadow: 0 -.83em 0 -.4em, -.377em -.74em 0 -.42em, -.645em -.522em 0 -.44em, -.775em -.297em 0 -.46em, -.82em -.09em 0 -.477em;
  }

  100% {
    box-shadow: 0 -.83em 0 -.4em, 0 -.83em 0 -.42em, 0 -.83em 0 -.44em, 0 -.83em 0 -.46em, 0 -.83em 0 -.477em;
  }
`;

const round = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  color: ${black};
  font-size: 40px;
  text-indent: -9999em;
  overflow: hidden;
  border-radius: 50%;
  animation: ${load} 1.7s infinite ease, ${round} 1.7s infinite ease;
`;

export default StyledLoader;

