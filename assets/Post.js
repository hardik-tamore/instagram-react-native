import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Avatar } from "react-native-paper";

const Post = (props) => {
  const win = Dimensions.get("window");
  const height = props.imgUrl.height;
  const width = props.imgUrl.width;
  const ratio = win.width / width;
  const style = StyleSheet.create({
    user: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: 10,
    },
    user__component: {
      marginLeft: 10,
    },
    image: {
      width: win.width,
      height: height * ratio,
      resizeMode: "contain",
    },
  });
  return (
    <View>
      <View style={style.user}>
        <Avatar.Image
          size={30}
          source={{ height: 200, width: 300, uri: props.avatar }}
        />
        <Text style={style.user__component}>{props.userName}</Text>
      </View>
      <Image style={style.image} source={{ uri: props.imgUrl.data }} />
    </View>
  );
};

export default Post;
