import { View, Text, ActivityIndicator, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await fetch("http://192.168.1.145:8080/api/user1");
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 bg-light justify-center items-center">
        <ActivityIndicator size="large" color="#b361d4" />
      </View>
    );
  }

  if (user)
    return (
      <SafeAreaView className="flex-1 bg-light justify-center items-center">
        <Text className="text-xl font-semibold">
          {user.firstName} {user.lastName}
        </Text>
        <Text>{user.phoneNumber}</Text>
        <Pressable className="bg-destructive px-4 py-2 rounded">
          <Text className="text-white font-medium">Se déconnecter</Text>
        </Pressable>
      </SafeAreaView>
    );
}
