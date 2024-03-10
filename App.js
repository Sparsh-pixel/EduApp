import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import About from "./src/Screens/About";
import ContactUs from "./src/Screens/ContactUs";
import Course from "./src/Screens/Course";
import CourseDetail from "./src/Screens/CourseDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={ContactUs} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Details" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
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
