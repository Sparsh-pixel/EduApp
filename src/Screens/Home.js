import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "../Components/Menu";

const Home = () => {
  const description =
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          resizeMode="contain"
          style={styles.headerImage}
          source={require("../../assets/images.jpg")}
        />
      </View>
      <Text style={styles.mainHeader}>Welcome to </Text>
      <Text style={styles.secondHeader}> Education App</Text>
      <Text style={styles.paraStyle}>{description}</Text>
      <View>
        <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 30,
    borderRadius: 20,
  },
  mainHeader: {
    textAlign: "center",
    color: "blue",
    fontSize: 30,
    textTransform: "uppercase",
  },
  secondHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    textAlign: "center",
    // margin: 10,
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    marginBottom: 50,
    paddingBottom: 70,
    lineHeight: 20,
  },
});

export default Home;
