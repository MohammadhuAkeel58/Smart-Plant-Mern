import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  function goto() {
    navigation.navigate("Register");
  }
  return (
    <View>
      <Text>Login</Text>
      <Pressable onPress={goto}>
        <Text style={{ backgroundColor: "black", color: "white" }}>
          Dashboard
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
