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
import SoundPlayer from "react-native-sound-player";
import { setCurrentSongID } from "../actions/songs";
import { setPlayerState } from "../actions/player";

const Player = props => {
  const onPressPrevious = () => {
    const newCurrentID = props.currentSongID == 0 ? props.songs.length - 1 : props.currentSongID - 1;
    props.setCurrentSongID(newCurrentID);
    SoundPlayer.playUrl(props.songs[newCurrentID].preview);
    props.setPlayerState(true);
  };
  const onPressNext = () => {
    const newCurrentID = props.currentSongID == props.songs.length - 1 ? 0 : props.currentSongID + 1;
    props.setCurrentSongID(newCurrentID)
    SoundPlayer.playUrl(props.songs[newCurrentID].preview);
    props.setPlayerState(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.player}>
          <View style={{ flexDirection: "row" }}>
            <AntDesignIcon
              name="doubleleft"
              size={25}
              color="#FFF"
              onPress={onPressPrevious}
              style={{marginLeft: 6}}
            />
            {!props.playing && <MaterialIcon
              name="play-arrow"
              size={25}
              color="#FFF"
              onPress={() => {
                props.setPlayerState(!props.playing)
                SoundPlayer.play()
              }}
              style={{marginLeft: 6}}
            />}
            {props.playing && <MaterialIcon
              name="pause"
              size={25}
              color="#FFF"
              onPress={() => {
                props.setPlayerState(!props.playing)
                SoundPlayer.pause()
              }}
              style={{marginLeft: 6}}
            />}
            <AntDesignIcon
              name="doubleright"
              size={25}
              color="#FFF"
              onPress={onPressNext}
              style={{marginLeft: 6}}
            />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>
            {props.songs[props.currentSongID] ? props.songs[props.currentSongID].title : "Select song..."}
          </Text>
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
    fontSize: 17,
    marginLeft: 30,
    marginTop: 10
  }
})

const mapStateToProps = state => ({
  currentSongID: state.songs.currentSongID,
  songs: state.songs.songs,
  playing: state.player.playing
})

export default connect(mapStateToProps, {
  setCurrentSongID,
  setPlayerState
})(Player);