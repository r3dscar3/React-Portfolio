module.exports = {
  pages: [
    {
      id: '1',
      name: 'home',
      sections: [
        {
          title: 'Home',
          content:
            "I'm Nolan Thompson, a web developer, husband, & dad\nThis is a little site about me. Hope you enjoy it.",
        },
        {
          title: 'Things I like',
          content: [
            {
              title: 'Bass',
              description:
                'Bass and playing in bands is a huge part of my life outside of work.',
            },
            {
              title: 'Golf',
              description:
                'Golf is such a challenging game but a great way to enjoy a couple of beers!',
            },
            {
              title: 'Hockey',
              description:
                "Go Coyotes! Ice hockey, street hockey I love it all.",
            },
          ],
        },
        {
          title: 'Developer stuff',
          content: [
            {
              title: 'React',
              src: '/static/home/react.svg',
              years: 6,
            },
            {
              title: 'GraphQL',
              src: '/static/home/graphql.svg',
              years: 3,
            },
            {
              title: 'StyledComponents',
              src: 'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png',
              years: 3,
            },
            {
              title: 'TypeScript',
              src: '/static/home/typeScript.svg',
              years: 3,
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'about',
      sections: [
        {
          title: 'About',
          content:
            'I am a web and application developer living in AZ.\n \nCurently I work as a staff software engineer and tech lead for Walmart InHome.\n\nPrevious companies I have worked for -\n  2017-19: The NHL\n  2013-17: Comcast SportsEngine (previously TeamUnify)\n\nI am a father of two awesome boys and love spending time traveling with my wife and kids in our 1962 GMC tour bus.\n\nI have always been "sort of" building websites but previously I was a graphic designer and always love being in a role where I need to make some UI adjustments or open illustrator to optimize an svg.\n\nThings I have done -\n  html\n  css\n  javaScript\n  React\n  TypeScript\n  GraphQL\n  Graphic design\n  General problem solving',
        },
      ],
    },
  ],
};
