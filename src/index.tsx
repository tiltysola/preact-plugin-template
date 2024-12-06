import { render } from 'preact';

import Container from '@/components/Container';
import Main from '@/components/Main';

import config from './config.js';

import './global.less';

export const Plugin = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

const registerPlugin = () => {
  const pluginContainer = document.createElement('div');
  pluginContainer.id = config.name;
  document.body.appendChild(pluginContainer);
  render(<Plugin />, pluginContainer);
};

registerPlugin();
