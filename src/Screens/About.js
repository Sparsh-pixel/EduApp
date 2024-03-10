import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Image
        style={styles.aboutImage}
        resizeMode="contain"
        source={require("../../assets/istockphoto-1494812295-170667a (1).webp")}
      />

      <Text style={{ textAlign: "center", fontSize: 20 }}>Our Story</Text>

      <View style={styles.storySection}>
        <Text>
          EduApp was born out of a desire to make learning accessible,
          enjoyable, and effective for everyone. Our team of educators,
          designers, and technologists came together with a shared vision to
          create a platform that harnesses the power of technology to transform
          education.
        </Text>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://www.instagram.com/")}
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://www.flaticon.com/free-icons/instagram",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://www.facebook.com/")}
        >
          <Image
            style={styles.iconStyle}
            source={{ uri: "https://www.flaticon.com/free-icons/facebook" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutContainer: {
    paddingHorizontal: 20,
  },
  aboutImage: {
    width: "auto",
    height: undefined,
    aspectRatio: 1,
  },
  storySection: {
    marginTop: 10,
  },
  socialContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});
