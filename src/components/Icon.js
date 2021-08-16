import React from 'react';

import GitHub from 'icons/GitHub';
import CodePen from 'icons/CodePen';
import LinkedIn from 'icons/LinkedIn';
import Glasses from 'icons/Glasses';

const Icon = ({ name, ...props }) => {
  const icons = {
    GitHub: <GitHub {...props} />,
    CodePen: <CodePen {...props} />,
    LinkedIn: <LinkedIn {...props} />,
  };

  if (!icons[name]) {
    return <Glasses {...props} />;
  }

  return icons[name];
};

export default Icon;
