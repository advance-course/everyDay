import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'components/element/Icon';
import map from 'components/element/Icon/map';
export const icons = [
  'aA',
  'feather-blur-light',
  'jiazai',
  'left',
  'liaotian-kuang',
  'tongzhi',
  'xin',
  'zuoyoujiantou'
];
export default function IconView() {
  return (
    <SafeAreaView style={st.container}>
      <ScrollView style={st.flex}>
        <View style={st.content}>
          <Text style={st.title}>基础</Text>
          <View style={st.items}>
            {icons.map((icon, index) => (
              <View style={st.item} key={index}>
                <Icon type={icon as keyof typeof map} />
                <Text>{icon}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={st.content}>
          <Text style={st.title}>颜色</Text>
          <View style={st.items}>
            {icons.map((icon, index) => (
              <View style={st.item} key={index}>
                <Icon type={icon as keyof typeof map} color={'green'} />
                <Text>{icon}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={st.content}>
          <Text style={st.title}>大小</Text>
          <View style={st.items}>
            {icons.map((icon, index) => {
              let fontSize = index + 20;
              return (
                <View style={st.item} key={index}>
                  <Icon type={icon as keyof typeof map} fontSize={fontSize} />
                  <Text>{icon}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={st.content}>
          <Text style={st.title}>旋转</Text>
          <View style={st.items}>
            {icons.map((icon, index) => (
              <View style={st.item} key={index}>
                <Icon type={icon as keyof typeof map} spin={true} />
                <Text>{icon}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1
  },
  flex: {
    flex: 1
  },
  content: {
    flex: 1,
    marginTop: 20
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: '500',
    color: '#333'
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  },
  item: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
