import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Arrow icon

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>
        "Like people, plants respond to extra attention." -H. Peter Loewer
      </Text>

      <Text style={styles.title}>Smart Plant</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/istockphoto-1334790507-612x612.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.navigationButtons}>
          {/* <Pressable
            style={[styles.button, styles.prevButton]}
            onPress={() => console.log("Previous pressed")}
          >
            <Ionicons
              name="arrow-back"
              size={20}
              color="#FFFFFF"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>PREV</Text>
          </Pressable>  */}

          <Pressable
            style={[styles.button, styles.nextButton]}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>NEXT</Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#FFFFFF"
              style={styles.icon}
            />
          </Pressable>
        </View>
      </View>
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
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "50%",
  },
  image: {
    width: "100%",
    height: "90%",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: -20,
    width: "100%",
    paddingLeft: 118,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // prevButton: {
  //   backgroundColor: "#FFA726", // Orange color for 'PREV'
  // },
  nextButton: {
    backgroundColor: "#66BB6A", // Green color for 'NEXT'
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default WelcomeScreen;
