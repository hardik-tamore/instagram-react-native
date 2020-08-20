import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const Navbar = () => {
  return (
    <View style={{ marginTop: StatusBar.currentHeight + 10 }}>
      <Text>Instagram</Text>
    </View>
  );
};

export default Navbar;
