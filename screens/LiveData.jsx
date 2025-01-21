import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Text, Animated, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LiveData = ({ navigation }) => {
  const soilMoistureRotation = useRef(new Animated.Value(0)).current;
  const sunlightRotation = useRef(new Animated.Value(0)).current;

  // Function to start rotation
  const startRotation = (animatedValue) => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 4000, // 4 seconds for a full rotation
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startRotation(soilMoistureRotation);
    startRotation(sunlightRotation);
  }, []);

  const soilMoistureStyle = {
    transform: [
      {
        rotate: soilMoistureRotation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  const sunlightStyle = {
    transform: [
      {
        rotate: sunlightRotation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Akeel</Text>
      <Text style={styles.subtitle}>You selected Plant Lemon</Text>

      {/* Rotating Soil Moisture Data */}
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circleWrapper, soilMoistureStyle]}>
          <LinearGradient
            colors={["#62BA77", "#2C5436"]}
            style={styles.circleWrapper}
          />
        </Animated.View>
        <View style={styles.circleInner}>
          <Text style={styles.circleText}>30.000</Text>
        </View>
      </View>
      <Text style={styles.dataLabel}>Live Soil Moisture Data</Text>

      {/* Rotating Sunlight Data */}
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circleWrapper, sunlightStyle]}>
          <LinearGradient
            colors={["#62BA77", "#2C5436"]}
            style={styles.circleWrapper}
          />
        </Animated.View>
        <View style={styles.circleInner}>
          <Text style={styles.circleText}>10.000</Text>
        </View>
      </View>
      <Text style={styles.dataLabel}>Live SunLight Data</Text>

      {/* Buttons */}
      <Pressable
        style={styles.buttonWrapper}
        onPress={() => console.log("Alert History Pressed")}
      >
        <LinearGradient colors={["#62BA77", "#2C5436"]} style={styles.button}>
          <Text style={styles.buttonText}>Alert History &gt;&gt;&gt;</Text>
        </LinearGradient>
      </Pressable>

      <Pressable
        style={styles.buttonWrapper}
        onPress={() => console.log("Plant Care Tips Pressed")}
      >
        <LinearGradient colors={["#62BA77", "#2C5436"]} style={styles.button}>
          <Text style={styles.buttonText}>Plant Care Tips &gt;&gt;&gt;</Text>
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
    fontSize: 36,
    fontWeight: "bold",
    color: "#62BA77",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2C5436",
    marginBottom: 20,
  },
  circleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  circleWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: "absolute",
  },
  circleInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#62BA77",
  },
  dataLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2C5436",
    marginBottom: 20,
  },
  buttonWrapper: {
    width: "80%",
    marginBottom: 15,
  },
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LiveData;
