import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

const config = require('./config.json');

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({host: config.ip}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
