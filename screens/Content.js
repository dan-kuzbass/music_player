import React from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import Song from "./Song";
import { connect } from "react-redux";

const Content = props => {
  return (
    <ScrollView style={styles.container}>
      {props.songs.map((song, id) => {
        return <Song song={song} key={id}/>
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  }
})

const mapStateToProps = state => ({
  songs: state.songs.songs
})

export default connect(mapStateToProps, {

})(Content);