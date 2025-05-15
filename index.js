/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import login from './src/screen/login';// import App from './App';
// To render your custome page import it instead of App page as below.
// import login from './src/screen/login';

import {name as appName} from './app.json';
//AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => login);
