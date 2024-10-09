require('@babel/register');
const React = require('react');
const { AppRegistry } = require('react-native');
const App = require('./App').default; // Ajuste o caminho conforme necessário

AppRegistry.registerComponent('AppName', () => App);
AppRegistry.runApplication('AppName', {
  initialProps: {},
  rootTag: document.getElementById('app-root'), // ou outro elemento root no HTML
});
