import React from 'react';
import {ScrollView, StyleSheet, StatusBar, Text, View} from 'react-native';

import Ibutton from 'element/Button';

const Details = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.title}>
        <Text style={styles.titleText}>Button 按钮</Text>
      </View>
      <ScrollView style={styles.box}>
        <Text style={styles.text}>按钮类型</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" type="primary" />
          <Ibutton title="信息按钮" type="info" />
          <Ibutton title="危险按钮" type="danger" />
          <Ibutton title="警告按钮" type="warning" />
          <Ibutton title="默认按钮" />
        </View>
        <Text style={styles.text}>朴素按钮</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" plain type="primary" />
          <Ibutton title="信息按钮" plain type="info" />
          <Ibutton title="危险按钮" plain type="danger" />
          <Ibutton title="警告按钮" plain type="warning" />
          <Ibutton title="默认按钮" plain />
        </View>
        <Text style={styles.text}>文本按钮</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" text type="primary" />
          <Ibutton title="信息按钮" text type="info" />
          <Ibutton title="危险按钮" text type="danger" />
          <Ibutton title="警告按钮" text type="warning" />
          <Ibutton title="默认按钮" text />
        </View>
        <Text style={styles.text}>禁用状态</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" disabled type="primary" />
          <Ibutton title="信息按钮" disabled type="info" />
          <Ibutton title="危险按钮" disabled type="danger" />
          <Ibutton title="警告按钮" disabled type="warning" />
          <Ibutton title="默认按钮" disabled />
        </View>
        <Text style={styles.text}>按钮形状</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" type="primary" />
          <Ibutton title="信息按钮" round type="info" />
        </View>
        <Text style={styles.text}>按钮大小</Text>
        <View style={styles.directWrap}>
          <Ibutton title="主要按钮" size="normal" type="primary" />
          <Ibutton title="信息按钮" size="small" type="info" />
          <Ibutton title="危险按钮" size="mini" type="danger" />
        </View>
        <Text style={styles.text}>附加样式</Text>
        <View style={styles.directWrap}>
          <Ibutton
            title="主要按钮"
            style={styles.buttonMargin}
            type="primary"
          />
          <Ibutton title="信息按钮" style={styles.buttonMargin} type="info" />
          <Ibutton title="危险按钮" style={styles.buttonMargin} type="danger" />
          <Ibutton
            title="警告按钮"
            style={styles.buttonMargin}
            type="warning"
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  title: {
    paddingVertical: 30,
    paddingLeft: 20,
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#1890ff'
  },
  text: {
    marginVertical: 10,
  },
  buttonMargin: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  directWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Details;
