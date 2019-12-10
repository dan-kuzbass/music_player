const initialState = {
  songs: [
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
}

export default function songs(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}