import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Course")}>
        <Text style={styles.textStyle}>Course</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Text style={styles.textStyle}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
        <Text style={styles.textStyle}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 19,
    fontFamily: "sans-serif",
  },
});
