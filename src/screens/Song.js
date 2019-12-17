import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import SoundPlayer from "react-native-sound-player";
import { setCurrentSongID } from "../actions/songs";
import { setPlayerState } from "../actions/player";
import { connect } from "react-redux";

const Song = props => {
  const viewDuration = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60 > 9 ? time % 60 : `0${time % 60}`;
    return `${minutes}:${seconds}`;
  }
  return (
    <TouchableOpacity onPress={() => {
      props.setCurrentSongID(props.id);
      SoundPlayer.playUrl(props.song.preview);
      props.setPlayerState(true);
      SoundPlayer.addEventListener("FinishedPlaying", () => {
        props.setPlayerState(false);
      })
    }} disabled={props.id === props.currentSongID}>
      <View style={{ ...styles.card, backgroundColor: props.currentSongID === props.id ? "#a0a0a0" : "white" }}>
        <View style={styles.description}>
          <View style={styles.firstRow}>
            <Text style={styles.track}>{props.song.artist.name}</Text>
            <Text style={styles.track}>{viewDuration(props.song.duration)}</Text>
          </View>
          <Text style={styles.title}>{props.song.title}</Text>
          <View style={styles.countContainer}>
            {props.playing && props.id === props.currentSongID &&
              <Icon
                name='pause'
                size={25}
              />
            }
            {(!props.playing || props.id !== props.currentSongID) &&
              <Icon
                name='play-arrow'
                size={25}
              />
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  description: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column'
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  track: {
    fontSize: 10
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#000',
    fontSize: 12
  },
  countContainer: {
    flexDirection: 'row'
  }
});

const mapStateToProps = state => ({
  currentSongID: state.songs.currentSongID,
  playing: state.player.playing
})

export default connect(mapStateToProps, {
  setCurrentSongID,
  setPlayerState
})(Song);