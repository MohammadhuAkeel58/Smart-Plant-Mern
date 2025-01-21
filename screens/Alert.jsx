import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const alertData = [
  { id: "1", text: "Time to Water", date: "15/10", time: "3.am" },
  { id: "2", text: "Move Plant", date: "15/10", time: "3.am" },
  { id: "3", text: "Move Plant", date: "15/10", time: "3.am" },
  { id: "4", text: "Time to Water", date: "15/10", time: "3.am" },
  { id: "5", text: "Move Plant", date: "15/10", time: "3.am" },
  { id: "6", text: "Time to Water", date: "15/10", time: "3.am" },
];

const Alert = () => {
  const renderItem = ({ item }) => (
    <View style={styles.alertBox}>
      <Text style={styles.alertText}>{item.text}</Text>
      <Text style={styles.alertDate}>{item.date}</Text>
      <Text style={styles.alertTime}>{item.time}</Text>
    </View>
  );

  const handlePress = () => {
    console.log("Akeel");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alert History</Text>

      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        <Pressable onPress={() => console.log("Previous pressed")}>
          <LinearGradient colors={["#FFA726", "#FF7043"]} style={styles.button}>
            <Ionicons
              name="arrow-back"
              size={20}
              color="#FFFFFF"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>PREV</Text>
          </LinearGradient>
        </Pressable>

        <Pressable onPress={handlePress}>
          <LinearGradient colors={["#66BB6A", "#43A047"]} style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#FFFFFF"
              style={styles.icon}
            />
          </LinearGradient>
        </Pressable>
      </View>

      {/* FlatList for Alert History */}
      <FlatList
        data={alertData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#62BA77",
    marginBottom: 20,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 5,
  },
  list: {
    width: "100%",
  },
  alertBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#62BA77",
  },
  alertText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C5436",
    flex: 1,
  },
  alertDate: {
    fontSize: 14,
    color: "#2C5436",
    marginHorizontal: 10,
  },
  alertTime: {
    fontSize: 14,
    color: "#2C5436",
  },
});

export default Alert;
