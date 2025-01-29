import React from "react";
import { useState } from "react";
import { Alert } from "react-native";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
const Register = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    // Validation checks
    if (!userName.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Validation Error", "All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Validation Error", "Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 6 characters long."
      );
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://10.0.2.2:5000/api/auth/register",
        {
          userName,
          email,
          password,
        }
      );
      console.log("Response:", response.data); // For debugging
      Alert.alert("Success", "Account created successfully.");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error during registration:", error); // For debugging
      Alert.alert("Error", "Could not create account. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Plant</Text>
      <Text style={styles.subtitle}>SignUp</Text>

      {/* Username Input */}
      <LinearGradient
        colors={["#62BA77", "#2C5436"]}
        style={styles.inputWrapper}
      >
        <TextInput
          placeholder="Username"
          value={userName}
          onChangeText={setUserName}
          placeholderTextColor="#FFFFFF"
          style={styles.inputField}
          selectionColor="#FFFFFF"
        />
      </LinearGradient>

      {/* Email Input */}
      <LinearGradient
        colors={["#62BA77", "#2C5436"]}
        style={styles.inputWrapper}
      >
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#FFFFFF"
          style={styles.inputField}
          keyboardType="email-address"
          selectionColor="#FFFFFF"
        />
      </LinearGradient>

      {/* Password Input */}
      <LinearGradient
        colors={["#62BA77", "#2C5436"]}
        style={styles.inputWrapper}
      >
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#FFFFFF"
          style={styles.inputField}
          secureTextEntry
          selectionColor="#FFFFFF"
        />
      </LinearGradient>

      <Text style={styles.confirmText}>Click the below Plant to confirm</Text>

      {/* Confirm Button */}
      <Pressable style={styles.imageButton} onPress={handleSignUp}>
        <Image
          source={require("../assets/images/istockphoto-1334790507-612x612.jpg")}
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

export default Register;
