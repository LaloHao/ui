import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { text, number, select, color } from '@storybook/addon-knobs/react';

import Container from './Container';

const story = storiesOf('Container', module);

story.add('demo', () => (
  <Container
    backgroundColor="yellow"
    flexDirection="column"
    color="white"
  >
    <Container
      alignItems="center"
      justifyContent="center"
      height="300px"
      color="black"
      fontWeight="bold"
      >
      everything is flex
    </Container>
    <Container
      backgroundColor="green"
      color="white"
      width="30%"
      padding="30px"
      borderRadius="15px"
      left="5px"
      cursor="pointer"
      onClick={action('onClick')}
      >
      backgroundColor
      color
      width
      padding
      borderRadius
      left
      cursor
      onClick
    </Container>
    <Container
      backgroundColor="gray"
      alignSelf="flex-end"
      margin="15px"
      >
      color inherited
    </Container>
    <Container
      color="black"
      flexDirection="row"
      >
      <Container
        flex="1"
        backgroundColor="cyan"
        >
        with
      </Container>
      <Container
        flex="1"
        backgroundColor="red"
        >
        flex
      </Container>
    </Container>
    <Container
      display="block"
      color="black"
      flexDirection="row"
      >
      <Container
        flex="1"
        backgroundColor="cyan"
        >
        without
      </Container>
      <Container
        flex="1"
        backgroundColor="red"
        >
        flex
      </Container>
    </Container>
    <Container
      position="absolute"
      top="30px"
      right="5px"
      color="black"
      >
      float
    </Container>
  </Container>
));

story.add('empty', () => <Container />)
story.add('with text', () => <Container>{text('text', 'with text')}</Container>)

const _border = (group) => {
  return {
    width: number(`${group} border width`, 1, {}, group),
    style: select(`${group} border style`, {
      none: 'none',
      hidden: 'hidden',
      dotted: 'dotted',
      dashed: 'dashed',
      solid: 'solid',
      double: 'double',
      groove: 'groove',
      ridge: 'ridge',
      inset: 'inset',
      outset: 'outset',
    }, 'solid', group),
    color: color(`${group} border color`, '#000000', group),
  };
};

story.add('with border', () => {
  const border = _border('all');
  return (
    <Container border={`${border.width}px ${border.style} ${border.color}`}>
      with border
    </Container>
  );
})

story.add('with independent borders', () => {
  const borderTop = _border('top');
  const borderRight = _border('right');
  const borderBottom = _border('bottom');
  const borderLeft = _border('left');
  return (
    <Container
      borderTop={`${borderTop.width}px ${borderTop.style} ${borderTop.color}`}
      borderRight={`${borderRight.width}px ${borderRight.style} ${borderRight.color}`}
      borderBottom={`${borderBottom.width}px ${borderBottom.style} ${borderBottom.color}`}
      borderLeft={`${borderLeft.width}px ${borderLeft.style} ${borderLeft.color}`}
    >
      with independent border
    </Container>
  );
})

const _margin = (group) => {
  return {
    width: number(`${group} margin`, 1, {}, group),
  };
};

story.add('with margin', () => {
  const margin = number(`margin`, 100);
  return (
    <Container margin={`${margin}px`}>
      with margin
    </Container>
  );
})
