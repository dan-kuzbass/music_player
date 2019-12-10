import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Song = props => {
  return (
    <TouchableOpacity onPress={() => { }} key={props.id}>
      <View style={styles.card}>
        <View style={styles.description}>
          <View style={styles.firstRow}>
            <Text style={styles.track}>{props.song.author}</Text>
            <Text style={styles.track}>{props.song.duration}</Text>
          </View>
          <Text style={styles.title}>{props.song.title}</Text>
          <View style={styles.countContainer}>
            <Icon name='play-arrow' size={25} />
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
})

export default Song