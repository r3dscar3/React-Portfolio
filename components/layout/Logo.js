import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import mediaQueries from 'utils/mediaQueries';

import Logo from 'icons/Logo';

const Container = styled.div`
  cursor: pointer;
  margin: 0 auto;
  width: 80%;

  ${mediaQueries.desktop`
    width: 111px;
  `}
`;

const Image = styled.img`
  display: block;
`;

export default () => {
  return (
    <Link href='/'>
      <Container>
        <Logo />
      </Container>
    </Link>
  );
};
