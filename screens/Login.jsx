import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Select");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Plant</Text>
      <Text style={styles.subtitle}>SignIn</Text>

      <LinearGradient
        colors={["#62BA77", "#2C5436"]}
        style={styles.inputWrapper}
      >
        <TextInput
          placeholder="Enter User Name"
          placeholderTextColor="#FFFFFF"
          style={styles.inputField}
          selectionColor="#FFFFFF"
        />
      </LinearGradient>

      <LinearGradient
        colors={["#62BA77", "#2C5436"]}
        style={styles.inputWrapper}
      >
        <TextInput
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          style={styles.inputField}
          secureTextEntry
          selectionColor="#FFFFFF"
        />
      </LinearGradient>

      <Text style={styles.confirmText}>Click the below Plant to confirm</Text>

      <Pressable style={styles.imageButton} onPress={handlePress}>
        <Image
          source={require("../assets/images/istockphoto-1334790507-612x612.jpg")} // Replace with your image path
          style={styles.image}
          resizeMode="contain"
        />
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
  inputWrapper: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputField: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
  },
  confirmText: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    marginBottom: 20,
  },
  imageButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default Login;
