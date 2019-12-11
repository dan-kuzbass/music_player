import React from 'react';
import Player from "./src/screens/Player";
import Content from "./src/screens/Content";
import {
  View,
  Dimensions,
  StyleSheet
} from "react-native";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Content />
        <Player />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 25
  }
})

export default App;
