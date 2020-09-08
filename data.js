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
                'I have been a musician for 27 years. Bass and playing in bands is a huge part of my life outside of work.',
            },
            {
              title: 'Golf',
              description:
                'I grew up playing golf. I am not very good, but I am not bad either. Play a round of golf sometime? Sure!',
            },
            {
              title: 'Hockey',
              description:
                "Before I ever wanted to play golf I wanted to be in the NHL. I got my chance, not on the ice but in the office. I love to watch and play when I get the chance. Some might say greatest sport in the world and I won't argue.",
            },
          ],
        },
        {
          title: 'Developer stuff',
          content: [
            {
              title: 'React',
              src: '/static/home/react.svg',
              description:
                'I have been a musician for 27 years. Bass and playing in bands is a huge part of my life outside of work.',
            },
            {
              title: 'GraphQL',
              src: '/static/home/graphql.svg',
              description:
                'I have been a musician for 27 years. Bass and playing in bands is a huge part of my life outside of work.',
            },
            {
              title: 'StyledComponents',
              src: 'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png',
              description:
                'I have been a musician for 27 years. Bass and playing in bands is a huge part of my life outside of work.',
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
            'I am a web and application developer living in NYC.\n \nCurently I work as a staff software engineer for Walmart in New Product Inovation.\n\nPrevious companies I have worked for -\n  2017-19: The NHL\n  2013-17: Comcast SportsEngine (previously TeamUnify)\n\nI am a father of two awesome boys and love spending time traveling with my wife and kids in our 1962 GMC tour bus.\n\nI have always been "sort of" building websites but previously I was a graphic designer and always love being in a role where I need to make some UI adjustments or open illustrator to optimize an svg.\n\nThings I have done -\n  javaScript\n  css\n  React\n  Graphic design\n  Screen printing\n  Problem solving',
        },
      ],
    },
  ],
};
