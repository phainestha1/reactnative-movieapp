import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Theme from "../Theme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation: { navigate } }) => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? Theme.nav_dark : Theme.nav_light,
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? Theme.nav_dark : Theme.nav_light,
        },
        headerTitleStyle: {
          color: isDark ? Theme.header_dark : Theme.header_light,
        },
        tabBarStyle: {
          backgroundColor: isDark ? Theme.nav_dark : Theme.nav_light,
        },
        tabBarActiveTintColor: isDark
          ? Theme.icon_active_dark
          : Theme.icon_active_light,
        tabBarInactiveTintColor: Theme.icon_inactive,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigate("Stack", { screen: "UserProfile" })}
          >
            <Feather
              name="user"
              size={24}
              color={isDark ? Theme.header_dark : Theme.header_light}
              style={{ paddingRight: 12 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="film" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="tv-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
