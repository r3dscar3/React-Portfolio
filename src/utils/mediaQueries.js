const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 320,
};

const mediaQueries = Object.keys(sizes).reduce((object, label) => {
  object[label] = `@media (min-width: ${sizes[label]}px)`;
  return object;
}, {});

export default mediaQueries;
