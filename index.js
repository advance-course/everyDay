/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'
console.log(App);
// if (__DEV__) {
//   import('./ReactotronConfig').then(() => {
//     console.log('Reactotron Configured');
//   });
// }

AppRegistry.registerComponent(appName, () => App);
