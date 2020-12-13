import React from 'react';
import {Pressable, Text, PressableProps} from 'react-native';
import {combineTheme} from './theme';
interface ButtonProps {
  title?: string;
  onPress?: PressableProps['onPress'];
  onLongPress?: PressableProps['onLongPress'];
  color?: string;
  disabled?: boolean;
  type?: string;
  plain?: boolean;
  text?: boolean;
  round?: boolean;
  size?: string;
  style?: object;
}

interface PressableProp {
  pressed: boolean;
}

const defaultPressCallback = () => {};

export default function Ibutton({
  title = '',
  type = 'default',
  plain = false,
  text = false,
  disabled = false,
  round = false,
  size = 'normal',
  style = {},
  onPress = defaultPressCallback,
  onLongPress = defaultPressCallback,
  ...otherProps
}: ButtonProps) {

  const styles = combineTheme(type, plain,  text, disabled, round, size, style);

  return (
    <Pressable
      {...otherProps}
      onPress={onPress}
      disabled={disabled}
      onLongPress={onLongPress}
      style={({pressed}: PressableProp) => [
        {
          opacity: pressed ? 0.7 : 1
        }
      ]}>
      <Text style={styles}>{title}</Text>
    </Pressable>
  );
}
