import { mount } from 'react-cosmos-loader/dom';
import { Hello } from '../src/index.js';

mount({
  proxies: [],
  fixtures: {
    HelloComponent: {
      'Batman': {
        component: Hello,
        props: {
          greeting: 'Hola',
          name: 'Batman'
        }
      },
      'Adele': {
        component: Hello,
        props: {
          greeting: 'Hello',
          name: 'from the other side'
        }
      },
      'Scarface': {
        component: Hello,
        props: {
          greeting: 'Say hello',
          name: 'to my little friend'
        }
      }
    }
  }
});
