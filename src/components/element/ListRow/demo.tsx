/*eslint-disable */
import React from 'react';

import {View, Text, Alert, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ListRow from './index'

const styles = StyleSheet.create({
    chunk: {
        width: '100%',
        height: 20
    }
})

const slot = ():React.ReactNode => <Icon name="bug-sharp" color="pink" size={30} suffix />

const Demo = () => {

    const  handleClick = ( ):void => {
        Alert.alert('You clicked on me!');
    }
    
    const handleLongPress = ():void => {
      Alert.alert('You long-pressed on me!');
    }


    return (
        <View>
        <View style={styles.chunk}/>
        <ListRow
            title="我很长"
            prefix={{
                value: require('./static/ava.jpg'),
                width: 30,
                height: 30,
                resizeMode: 'contain',
                type: 'thumb',
            }}
        />
        <View style={styles.chunk}/>
        <ListRow
            title="我很长我很长"
            prefix={{
                value: 'bug-outline',
                size: 30,
                resizeMode: 'contain',
                type: 'icon',
            }}
            suffix={{
                value: require('./static/ava.jpg'),
                width: 30,
                height: 30,
                resizeMode: 'cover',
                type: 'thumb',
            }}
          >
        </ListRow>
        <View style={styles.chunk}/>
        <ListRow
          title="我很长我很长我很长我很长"
          note="我更长我更长我更长我更长我更长"
          extraText="我还可以"
          prefix={{
              value: 'bug-outline',
              size: 30,
              resizeMode: 'contain',
              type: 'icon',
          }}
          suffix={{
              value: 'chevron-forward-sharp',
              size: 30,
              color: 'green',
              resizeMode: 'cover',
              type: 'icon',
          }}
        />
        <View style={styles.chunk}/>
        <ListRow
          title="我很长我很长我很长我很长"
          prefix={{
            value: 'bug-sharp',
            size: 30,
            resizeMode: 'contain',
            type: 'icon',
          }}
          onClick={handleClick}
          onLongPress={handleLongPress}
        />
          <View style={styles.chunk}/>
          <ListRow
                title="我很长我很长我很长我很长"
                prefix={{
                    value: 'bug-sharp',
                    size: 30,
                    resizeMode: 'contain',
                    type: 'icon',
                }}
            >
                <Text prefix>slot</Text>
            </ListRow>
            <View style={styles.chunk}/>
          <ListRow
                title="我很长我很长我很长我很长"
                suffix={{
                    value: 'bug-sharp',
                    size: 30,
                    resizeMode: 'contain',
                    type: 'icon',
                }}
            >
               {slot()}
            </ListRow>
            <View style={styles.chunk}/>
        </View>
    )
};

export default Demo;
