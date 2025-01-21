import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const blogData = [
  {
    id: "1",
    title: "Lemon",
    image: require("../assets/images/istockphoto-1334790507-612x612.jpg"),
    tips: "Water regularly and provide sunlight.",
  },
  {
    id: "2",
    title: "Lemon",
    image: require("../assets/images/istockphoto-1334790507-612x612.jpg"),
    tips: "Fertilize every two weeks during growing season.",
  },
  {
    id: "3",
    title: "Lemon",
    image: require("../assets/images/istockphoto-1334790507-612x612.jpg"),
    tips: "Prune dead branches to encourage growth.",
  },
];

const BlogList = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handlePress = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id)); // Toggle expand/collapse
  };

  const renderItem = ({ item }) => (
    <View style={styles.blogCard}>
      {/* Blog Header */}
      <LinearGradient colors={["#62BA77", "#2C5436"]} style={styles.blogHeader}>
        <Text style={styles.blogTitle}>{item.title}</Text>
      </LinearGradient>

      {/* Blog Image */}
      <Image source={item.image} style={styles.blogImage} />

      {/* Read More Button */}
      <Pressable onPress={() => handlePress(item.id)}>
        <Text style={styles.readMore}>
          {expandedId === item.id ? "Show Less..." : "Read More...."}
        </Text>
      </Pressable>

      {/* Expandable Tips */}
      {expandedId === item.id && (
        <View style={styles.tipsContainer}>
          <Text style={styles.tipsText}>{item.tips}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plant & Tips</Text>
      <FlatList
        data={blogData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BlogList;

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
  list: {
    width: "100%",
  },
  blogCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  blogHeader: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  blogTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  blogImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  readMore: {
    padding: 10,
    textAlign: "right",
    fontSize: 14,
    color: "#62BA77",
    fontWeight: "bold",
  },
  tipsContainer: {
    padding: 10,
    backgroundColor: "#F5F5F5",
    borderTopWidth: 1,
    borderColor: "#62BA77",
  },
  tipsText: {
    fontSize: 14,
    color: "#2C5436",
  },
});
