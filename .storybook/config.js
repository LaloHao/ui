import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const config = {
  header: true,
  inline: false,
};
const info = (story, context) => withInfo('')(story)(context);
addDecorator(info);
addDecorator(withKnobs);

const req = require.context('../src', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
