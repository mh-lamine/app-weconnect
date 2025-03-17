import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { SALONS } from "@/db";
import { useEffect, useState } from "react";
import { icons } from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(SALONS);

  const searchSalon = () => {
    const filteredSalons = SALONS.filter((salon) =>
      salon.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredSalons);
  };

  useEffect(() => {
    searchSalon(query);
  }, [query]);

  return (
    <SafeAreaView className="flex-1 bg-light">
      <View className="flex-row items-center gap-2 h-12 border-2 bg-white border-primary/75 rounded-full px-4 m-4">
        <Image
          source={icons.search}
          className="size-5"
          resizeMode="contain"
          tintColor="#928795"
        />
        <TextInput
          onChangeText={setQuery}
          className="flex-1 h-full"
          placeholder="Trouvez votre salon"
          placeholderTextColor="#928795"
          value={query}
        />
      </View>

      <FlatList
        data={searchResults}
        renderItem={({ item }) => <Salon salon={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

function Salon({ salon }) {
  const router = useRouter();
  return (
    <Pressable
      className="mx-4 mb-4 shadow-sm"
      onPress={() => router.push(`/${salon.id}`)}
    >
      <ImageBackground
        source={{ uri: salon.coverImage }}
        resizeMode="cover"
        className="h-60 bg-dark/50 rounded-xl overflow-hidden"
      >
        <View className="w-full h-full bg-dark/25 absolute" />
        <View className="flex-row items-center gap-4 mt-auto p-4">
          {salon.profilePicture ? (
            <Image
              source={{ uri: salon.profilePicture }}
              className={`w-16 h-16 rounded-full ${
                salon.isFav && "border-primary/75 border-2"
              }`}
            />
          ) : (
            <View className="w-16 h-16 rounded-full bg-gray-200" />
          )}
          <View className="flex-1 justify-center">
            <Text className="text-2xl font-semibold text-white">
              {salon.name}
            </Text>
            <Text className="text-white">{salon.address}</Text>
          </View>
          {salon.isFav && (
            <Ionicons
              name="heart"
              size={20}
              color="#b361d4"
              className="absolute top-4 left-3"
            />
          )}
        </View>
      </ImageBackground>
    </Pressable>
  );
}
