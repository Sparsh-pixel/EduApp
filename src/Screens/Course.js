import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import courseApi from "../api/CourseApi";

const Course = ({ navigation }) => {
  // const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // };
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <View>
            <Image
              style={styles.images}
              source={{ uri: item.image }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.desc}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("Details", {
                  courseId: item.id,
                })
              }
            >
              <Text style={styles.buttonDetail}>Course Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={courseApi}
      renderItem={courseCard}
      // refreshing={refreshing}
      // onRefresh={onRefresh}
    />
  );
};

export default Course;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
  },
  courseContainer: {
    marginVertical: 20,
    textAlign: "center",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: 0.2,
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 3,
  },
  images: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainHeader: {
    textAlign: "center",
    fontSize: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonDetail: {
    fontSize: 16,
  },
});
