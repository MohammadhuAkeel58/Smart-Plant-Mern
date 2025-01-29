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
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      return Alert.alert("Error", "Please fill in both fields.");
    }

    if (!validateEmail(email)) {
      return Alert.alert("Error", "Please enter a valid email address.");
    }

    try {
      const response = await axios.post("http://10.0.2.2:5000/api/auth/login", {
        email,
        password,
      });
      const { token } = response.data;
      await AsyncStorage.setItem("userToken", token);
      navigation.navigate("Select", { token });
    } catch (error) {
      Alert.alert("Error", "Invalid email or password");
    }
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
          placeholder="email"
          value={email}
          onChangeText={setEmail}
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
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#FFFFFF"
          style={styles.inputField}
          secureTextEntry
          selectionColor="#FFFFFF"
        />
      </LinearGradient>

      <Text style={styles.confirmText}>Click the below Plant to confirm</Text>

      <Pressable style={styles.imageButton} onPress={handleSignIn}>
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
