import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { WarningIcon } from 'nhsuk-react-components-extensions';

const stories = storiesOf('NHSUK Ext/Icons', module);

stories.add('WarningIcon', () => <WarningIcon />);
