import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Container from '../Container';

storiesOf('Container', module)
  .add('demo', () => (
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
  ))
  .add('empty', () => <Container />)
  .add('with text', () => <Container>with text</Container>)
  .add('with border', () => <Container border="1px solid black">with border</Container>)
