import React from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import Song from "./Song";

const Content = props => {
  const songs = [
    {
      author: "Король и шут",
      title: "Фрэд",
      duration: "3:01"
    },
    {
      author: "Linking park",
      title: "What Ive done",
      duration: "3:32"
    },
    {
      author: "7Б",
      title: "Молодые ветра",
      duration: "4:25"
    },
    {
      author: "Sia",
      title: "Chandelier",
      duration: "3:36"
    },
    {
      author: "SAINt JHN",
      title: "Roses",
      duration: "3:01"
    },
    {
      author: "Mohombi",
      title: "Hello",
      duration: "3:32"
    },
    {
      author: "Bakstreet Boys",
      title: "Figured You Out",
      duration: "4:25"
    },
    {
      author: "Katy Perry",
      title: "Roar",
      duration: "3:36"
    }
  ]
  return (
    <ScrollView style={styles.container}>
      {songs.map((song, id) => {
        return <Song song={song} id={id}/>
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  }
})

export default Content