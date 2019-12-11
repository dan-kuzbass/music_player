import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Text
} from "react-native";
import {
  Spinner
} from "native-base";
import Song from "./Song";
import { connect } from "react-redux";
import { getSongsOfPlaylist } from "../actions/songs";

const Content = props => {
  useEffect(() => {
    props.getSongsOfPlaylist("6947561964");
  }, []);
  if (props.loading) {
    return (
      <ScrollView style={styles.container}>
        <Spinner color='red'/>
      </ScrollView>
    )
  }
  else if (props.error) {
    return (
      <ScrollView style={styles.container}>
        <Text>Something error...</Text>
      </ScrollView>
    )
  }
  else {
    return (
      <ScrollView style={styles.container}>
        {props.songs.map((song, id) => {
          return <Song song={song} key={id} />
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  }
})

const mapStateToProps = state => ({
  songs: state.songs.songs,
  loading: state.songs.loading,
  error: state.songs.error
})

export default connect(mapStateToProps, {
  getSongsOfPlaylist
})(Content);