/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import { ActionLink } from 'nhsuk-react-components';

const stories = storiesOf('NHSUK/ActionLink', module);

stories.addDecorator(centered).add('ActionLink', () => <ActionLink>Link</ActionLink>);
