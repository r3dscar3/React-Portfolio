import React from 'react';

import GitHub from 'icons/GitHub';
import CodePen from 'icons/CodePen';
import LinkedIn from 'icons/LinkedIn';

const Icon = ({ name, ...props }) => {
  const icons = {
    GitHub: <GitHub {...props} />,
    CodePen: <CodePen {...props} />,
    LinkedIn: <LinkedIn {...props} />,
  };

  return icons[name];
};

export default Icon;
