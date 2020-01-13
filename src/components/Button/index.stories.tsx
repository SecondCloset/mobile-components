import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text } from 'react-native';

// Components
import { CenterView, Button } from '../../components';

storiesOf('Button', module)
  .addDecorator((getStory: () => React.ReactNode) => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('with text', () => (
    <Button onPress={action('clicked')}>
      <Text>hey</Text>
    </Button>
  ));
