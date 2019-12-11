import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { connect } from "react-redux";
import { getSongsOfPlaylist } from "../actions/songs";
import SoundPlayer from "react-native-sound-player";

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
              onPress={() => {
                SoundPlayer.playUrl('https://cdns-preview-d.dzcdn.net/stream/c-dcc03940c7edb13b42ee6247f844a2da-3.mp3')
              }}
              style={{marginLeft: 10}}
            />
            <MaterialIcon
              name="pause"
              size={25}
              color="#FFF"
              onPress={() => {
                SoundPlayer.play()
              }}
              style={{marginLeft: 10}}
            />
            <AntDesignIcon
              name="doubleright"
              size={25}
              color="#FFF"
              onPress={() => {
                SoundPlayer.pause()
              }}
              style={{marginLeft: 10}}
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

const mapStateToProps = state => ({
  songs: state.songs.songs,
  loading: state.songs.loading,
  error: state.songs.error
})

export default connect(mapStateToProps, {
  getSongsOfPlaylist
})(Player);