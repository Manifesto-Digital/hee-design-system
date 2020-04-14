/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { BackLink } from 'nhsuk-react-components';

const stories = storiesOf('NHSUK/BackLink', module);

stories.addDecorator(centered).add('BackLink', () => <BackLink>Link</BackLink>);
