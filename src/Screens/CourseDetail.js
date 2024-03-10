import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import courseApi from "../api/CourseApi";

const CourseDetail = ({ navigation, route }) => {
  const id = route.params.courseId;
  // console.log(id);

  const selectedCourse = courseApi.find((element) => {
    return element.id === id;
  });
  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
        <View>
          <Image
            style={styles.images}
            source={{ uri: selectedCourse.image }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.desc}>{selectedCourse.description}</Text>
      </View>
    </View>
  );
};

export default CourseDetail;

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
  },
  images: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainHeader: {
    textAlign: "center",
    fontSize: 19,
  }
});
