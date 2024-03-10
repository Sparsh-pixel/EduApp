import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const ContactUs = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Contact Us</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.box}
          value={name}
          onChangeText={(e) => SetName(e.target.value)}
        />
        <Text style={styles.labels}>Enter your email</Text>
        <TextInput
          placeholder="Enter your email "
          style={styles.box}
          value={email}
          onChangeText={(e) => SetEmail(e.target.value)}
        />
        <Text style={styles.labels}>Enter your Phone Number</Text>
        <TextInput
          placeholder="Enter your phone number"
          style={styles.box}
          value={phone}
          onChangeText={(e) => SetPhone(e.target.value)}
        />
        <Button title="SUBMIT"></Button>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 25,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
  },
  labels: {
    fontSize: 19,
  },
  inputContainer: {
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: "lightgrey",
    width: "80%",
    margin: 10,
    padding: 8,
  },
});
