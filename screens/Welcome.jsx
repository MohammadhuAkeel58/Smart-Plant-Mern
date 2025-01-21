import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.quote}>
        "Like people, plants respond to extra attention." -H. Peter Loewer
      </Text>

      <Text style={styles.title}>Smart Plant</Text>
      <Image
        source={require("../assets/images/istockphoto-1334790507-612x612.jpg")} // Update path based on your folder structure
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  quote: {
    fontSize: 28,
    fontWeight: "300",
    color: "#2D9C47",
    textAlign: "center",
    marginTop: 120,
  },

  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#2D9C47",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "50%",
  },
});

export default WelcomeScreen;
