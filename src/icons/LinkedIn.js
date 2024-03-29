import React from 'react';

import theme from 'utils/theme';

const LinkedIn = ({ fill = theme.colors.textDefault }) => {
  return (
    <svg fill={fill} viewBox='0 0 48 48'>
      <path
        d='M14.2,10.1c0,2.1-1.6,3.8-4.2,3.8c-2.4,0-4-1.7-4-3.8c0-2.2,1.6-3.8,4.1-3.8C12.6,6.3,14.1,7.9,14.2,10.1z M6.2,41.7V17h7.7
	v24.8H6.2z M18.5,24.9c0-3.1-0.1-5.7-0.2-7.9H25l0.4,3.4h0.2c1-1.6,3.5-4,7.6-4c5.1,0,8.9,3.4,8.9,10.7v14.6h-7.7V28
	c0-3.2-1.1-5.4-3.9-5.4c-2.1,0-3.4,1.5-3.9,2.9c-0.2,0.5-0.3,1.2-0.3,1.9v14.3h-7.7V24.9z'
      />
    </svg>
  );
};

export default LinkedIn;
