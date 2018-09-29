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

story.add('with border', () => {
  const border = {
    width: number('border width', 1),
    style: select('border style', {
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
    }, 'solid'),
    color: color('border color', 'black'),
  };

  return (
    <Container border={`${border.width}px ${border.style} ${border.color}`}>
      with border
    </Container>
  );
})
