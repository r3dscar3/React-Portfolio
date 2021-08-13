import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import mediaQueries from 'utils/mediaQueries';

import Glasses from 'icons/Glasses';

const Container = styled.div`
  cursor: pointer;
  margin: 0 auto;
  width: 80%;

  ${mediaQueries.desktop`
    width: 111px;
  `}
`;

const Logo = () => {
  return (
    <Link href='/' passHref>
      <Container>
        <Glasses />
      </Container>
    </Link>
  );
};

export default Logo;
