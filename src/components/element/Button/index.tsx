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
  round?: boolean;
  size?: string;
  style?: object;
}

interface PressableProp {
  pressed: boolean,
}

const defaultPressCallback = () => {};
const defaultProps = {
  type: 'default',
  plain: false,
  disabled: false,
  round: false,
  size: 'normal',
  style: {},
  onPress: defaultPressCallback,
  onLongPress: defaultPressCallback,
};

export default function Ibutton(props: ButtonProps) {
  const {
    title,
    type,
    onPress,
    onLongPress,
    disabled,
    plain,
    round,
    size,
    style,
  } = {...defaultProps, ...props};

  const styles = combineTheme(type, plain, disabled, round, size, style);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onLongPress={onLongPress}
      style={({pressed}:PressableProp) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}>
      <Text style={styles}>{title}</Text>
    </Pressable>
  );
}