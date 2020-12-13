import React from 'react';
import {Pressable, Text, PressableProps, StyleSheet, View} from 'react-native';
import {combineTheme} from './theme';
import Icon from 'element/Icon';
interface ButtonProps {
  title?: string;
  onPress?: PressableProps['onPress'];
  onLongPress?: PressableProps['onLongPress'];
  color?: string;
  disabled?: boolean;
  type?: string;
  plain?: boolean;
  text?: boolean;
  icon?: string;
  round?: boolean;
  size?: string;
  loading?: boolean,
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
  icon = '',
  loading = false,
  onPress = defaultPressCallback,
  onLongPress = defaultPressCallback,
  ...otherProps
}: ButtonProps) {
  const styles = combineTheme(type, plain, text, disabled, round, size, loading, style);
  const iconComponet = (iconType: any, iconStyle: object, isLoading: boolean) => {
    return iconType || loading ? <Icon type={isLoading ? 'jiazai' : iconType} spin={isLoading} style={iconStyle} /> : <></>;
  };
  return (
    <Pressable
      {...otherProps}
      onPress={onPress}
      disabled={loading ? true : disabled}
      onLongPress={onLongPress}
      style={({pressed}: PressableProp) => [
        {
          opacity: pressed ? 0.7 : 1
        }
      ]}>
      <View style={[styles.boxStyle, normalStyle.flexCenter]}>
        {iconComponet(icon, styles.textStyle, loading)}
        <Text style={[styles.textStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
}

const normalStyle = StyleSheet.create({
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
