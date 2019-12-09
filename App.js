import React from 'react';
import Player from "./screens/Player";
import Content from "./screens/Content";
import {
  View,
  Dimensions,
  StyleSheet
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Content />
      <Player />   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height - 25
  }
})

export default App;
