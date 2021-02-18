

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './App/Redux/Store';
import Todos from './App/Screens/Todos';
import Post from './App/Screens/Post';
function App() {
  return (
    <Provider store={store}>
      <Post />
    </Provider>
  )
}

export default App;
