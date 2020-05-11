import React from "react";

import ChatListItem from "../components/ChatListItem";

import { db } from "../Firebase";

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { GoogleAuthData } from "expo-google-sign-in";

const dummyData = [
  {
    id: "5",
    title: "Isra",
    lastMessage: "Jacob: yo whats up",
  },
  {
    id: "4",
    title: "Group Chat",
    lastMessage: "Jacob: hello",
  },
  {
    id: "3",
    title: "Lauryn",
    lastMessage: "Lauryn: Ok sounds great",
  },
];

// export default function ChatList({ navigation }) {
//   console.log("CHAT LIST PROPS", navigation);

//   function goToSingleChat() {
//     console.log("yes");
//     navigation.navigate("SingleChat", {
//       contactId: "Xr067E9MvdVlMPB3k2fXO7EfFgZ2",
//       contactName: "Isra Khan",
//       contactEmail: "israkhan2@gmail.com",
//     });
//   }

//   return (
//     <View>
//       <FlatList
//         data={dummyData}
//         renderItem={({ item }) => (
//           <ChatListItem
//             key={item.title}
//             item={item}
//             goToSingleChat={goToSingleChat}
//           />
//         )}
//       />
//     </View>
//   );
// }

export default class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.goToSingleChat = this.goToSingleChat.bind(this);
  }

  goToSingleChat() {
    console.log("yes", this.props);
    this.props.navigation.navigate("SingleChat", {
      contactId: "Xr067E9MvdVlMPB3k2fXO7EfFgZ2",
      contactName: "Isra Khan",
      contactEmail: "israkhan2@gmail.com",
    });
  }
  render() {
    return (
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <ChatListItem item={item} goToSingleChat={this.goToSingleChat} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
