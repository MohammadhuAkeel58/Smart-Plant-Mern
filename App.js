import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Welcome from "./screens/Welcome";
import Select from "./screens/Select";
import LiveData from "./screens/LiveData";
import Alert from "./screens/Alert";
import Plants from "./screens/Plants";
import Tips from "./screens/Tips";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerTintColor: "white", // Text color
            headerBackground: () => (
              <LinearGradient
                colors={["#62BA77", "#2C5436"]} // Gradient colors
                start={{ x: 0, y: 0 }} // Top-left
                end={{ x: 1, y: 1 }} // Bottom-right
                style={StyleSheet.absoluteFill} // Ensures gradient fills the header
              />
            ),
            drawerActiveBackgroundColor: "#62BA77",
            drawerActiveTintColor: "white",
            drawerStyle: { backgroundColor: "#ccc" },
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={Welcome}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={18} />
              ),
              headerShown: false,
            }}
          />

          <Drawer.Screen
            name="Login"
            component={Login}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons name="login" color={color} size={18} />
              ),
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Register"
            component={Register}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-plus"
                  color={color}
                  size={18}
                />
              ),
              headerShown: false,
            }}
          />

          <Drawer.Screen
            name="Select"
            component={Select}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="caret-down-outline" color={color} size={18} />
              ),
            }}
          />

          <Drawer.Screen
            name="Live"
            component={LiveData}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="radiobox-marked"
                  color={color}
                  size={18}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Alert"
            component={Alert}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={18} />
              ),
            }}
          />

          <Drawer.Screen
            name="Plants"
            component={Plants}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons name="leaf" color={color} size={18} />
              ),
            }}
          />

          <Drawer.Screen
            name="Tips"
            component={Tips}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="watering-can"
                  color={color}
                  size={18}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
