/**
 * @format
 */

import {AppRegistry} from 'react-native'; // remains same at all project to render.
// import App from './App'; // project1: step1

// import login from './src/screen/login';
// ->project2: step1
// import App from './App'; 
// To render your custome page import it instead of App page as below.
// import login from './src/screen/login';

import flex from './src/screen/flex';
import {name as appName} from './app.json'; //remains same at all project to render.
//AppRegistry.registerComponent(appName, () => App);
//project1: step2

// AppRegistry.registerComponent(appName, () => login);
//project2: step2

//PROJECT3 FLEX
AppRegistry.registerComponent(appName,() => flex)
