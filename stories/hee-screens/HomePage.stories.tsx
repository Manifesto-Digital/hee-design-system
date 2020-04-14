/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { HomePage } from '../../src';




const stories = storiesOf('HEE Screens/HomePage', module).addDecorator(withA11y);

stories
  .add('Basic Homepage', () => (
    <HomePage title="Sample Homepage"/>
));
