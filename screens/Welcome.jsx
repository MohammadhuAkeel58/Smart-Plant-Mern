import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.quote}>
        "Like people, plants respond to extra attention." — H. Peter Loewer
      </Text>
      <MaskedView maskElement={<Text style={styles.title}>Smart Plant</Text>}>
        <LinearGradient
          colors={["#62BA77", "#2C5436"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
      </MaskedView>
      <Image
        source={require("../assets/istockphoto-1334790507-612x612.jpg")} // Path to your local asset
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  gradient: {
    width: 200, // Match the width of your text
    height: 40, // Match the height of your text
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "contain",
    marginTop: 20,
  },
});
