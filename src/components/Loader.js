import React from 'react';
import styled from 'styled-components';

import theme from 'utils/theme';

const StyledLoader = styled.div`
  position: absolute;
  width: 100%;
  max-width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 666;
`;

const LoadingSpinner = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  margin: 0 auto;

  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid ${theme.colors.backgroundMenu};
    border-top-color: transparent;
    animation: spinner 0.4s linear infinite;

    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <LoadingSpinner />
    </StyledLoader>
  );
};

export default Loader;
