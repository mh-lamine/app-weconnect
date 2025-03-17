import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#b361d4",
        tabBarInactiveTintColor: "#250F2C",
        tabBarStyle: {
          backgroundColor: "#E9E7EA",
          height: 80,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} name="albums-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(saved)"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} name="bookmark-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} name="calendar-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons size={size} name="person-circle-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
