import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import classNames from './classNames';

interface Props {
  count?: number | string,
  max?: number,
  isDot?: boolean,
  color?: string,
  backgroundColor?: string,
  borderColor?: string,
  showZero?: boolean,
}

const Badge: React.FC<Props> = (props) => {
  const defaultMax = 99;
  const style = classNames(styles.view, { backgroundColor: props.backgroundColor, borderColor: props.borderColor });
  const textStyle = classNames(styles.innerText, { color: props.color });
  const dotStyle = classNames(styles.dot, { backgroundColor: props.backgroundColor });
  const base = <View style={style}>
    <Text style={textStyle} ellipsizeMode="tail">
      {
        typeof props.count === 'number' ? props.max && props.count > props.max ? props.max + '+' : props.count > defaultMax ? defaultMax + '+' : props.count : props.count
      }
    </Text>
  </View>;
  if ((props.count === undefined) && !props.isDot || props.isDot && !props.children) {
    return null;
  }

  if (typeof props.count === 'number' && (props.count < 0 || !props.showZero && (props.count === 0))) {
    if (props.children) {
      return (
        <View>
          {props.children}
        </View>
      )
    }
    return null

  }
  if (props.children) {
    return (
      <View>
        {props.children}
        {props.isDot ? <View style={dotStyle} /> : base}
      </View>
    );
  }
  return (
    <Text>
      {base}
    </Text>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 20,
    lineHeight: 20,
    textAlign: 'center',
    borderRadius: 10,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: 'rgb(82, 196, 26)',
    position: 'absolute',
    top: -10,
    right: -15,
  },
  innerText: {
    color: '#fff',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: 'rgb(82, 196, 26)',
    borderRadius: 4,
    position: 'absolute',
    top: -3,
    right: -3,
  },
});

export default Badge;
