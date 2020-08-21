import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Navbar from "./assets/Navbar";
import { Avatar } from "react-native-paper";
import Post from "./assets/Post";
import ImagePickerExample from "./assets/imagePicker";

export default function App() {
  const [post, setPost] = useState([
    {
      avatar:
        "https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900",
      userName: "Hardik",
      caption: "Hello",
      imgUrl: {
        data:
          "https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900",
        height: 900,
        width: 1600,
      },
    },
    {
      avatar:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      userName: "Hardik Tamore",
      caption: "Hello simps",
      imgUrl: {
        data:
          "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        height: 820,
        width: 805,
      },
    },
    {
      avatar:
        "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1100&format=jpeg&auto=webp",
      userName: "Mr_bhaw",
      caption: "Hello simps",
      imgUrl: {
        data:
          "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1100&format=jpeg&auto=webp",
        height: 833,
        width: 1100,
      },
    },
  ]);

  const postList = post.map((post) => {
    return (
      <Post
        key={post.userName}
        avatar={post.avatar}
        userName={post.userName}
        caption={post.caption}
        imgUrl={post.imgUrl}
      />
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView>
        {postList}
        <ImagePickerExample />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
