import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const Player = props => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.player}>
          <View style={{ flexDirection: "row" }}>
            <AntDesignIcon
              name="doubleleft"
              size={25}
              color="#FFF"
              onPress={() => {}}
            />
            <MaterialIcon
              name="pause"
              size={25}
              color="#FFF"
              onPress={() => {}}
            />
            <AntDesignIcon
              name="doubleright"
              size={25}
              color="#FFF"
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>SoundTitle</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    width: Dimensions.get('window').width,
    height: 70,
    padding: 10,
    backgroundColor: '#3a3f41',
    borderTopWidth: 2,
    borderTopColor: 'red'
  },
  card: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
  },
  player: {
    padding: 10,
    width: 50,
    height: 50
  },
  description: {
    marginLeft: 50
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#fff',
    fontSize: 22
  }
})

export default Player