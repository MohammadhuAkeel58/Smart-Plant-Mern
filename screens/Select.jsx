import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SelectPlantScreen = ({ navigation }) => {
  const handleSelect = (plant) => {
    console.log(`${plant} selected`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Plant</Text>
      <Text style={{ fontFamily: "Pattaya" }}>Select Plant</Text>

      {/* Lemon Button */}
      <Pressable
        onPress={() => handleSelect("Lemon")}
        style={styles.buttonWrapper}
      >
        <LinearGradient colors={["#62BA77", "#2C5436"]} style={styles.button}>
          <Text style={styles.buttonText}>Lemon</Text>
        </LinearGradient>
      </Pressable>

      {/* Tomato Button */}
      <Pressable
        onPress={() => handleSelect("Tomato")}
        style={styles.buttonWrapper}
      >
        <LinearGradient colors={["#62BA77", "#2C5436"]} style={styles.button}>
          <Text style={styles.buttonText}>Tomato</Text>
        </LinearGradient>
      </Pressable>

      {/* Potato Button */}
      <Pressable
        onPress={() => handleSelect("Potato")}
        style={styles.buttonWrapper}
      >
        <LinearGradient colors={["#62BA77", "#2C5436"]} style={styles.button}>
          <Text style={styles.buttonText}>Potato</Text>
        </LinearGradient>
      </Pressable>

      {/* Coriander Button */}
      <Pressable
        onPress={() => handleSelect("Coriander")}
        style={styles.buttonWrapper}
      >
        <LinearGradient colors={["#62BA77", "#2C5436"]} style={styles.button}>
          <Text style={styles.buttonText}>Coriander</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#2D9C47",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#2D9C47",
    marginBottom: 30,
  },
  buttonWrapper: {
    width: "80%", // Keeps buttons centered and aligned
    marginBottom: 15,
  },
  button: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SelectPlantScreen;
