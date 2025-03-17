import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { SALONS } from "@/db";
import { Ionicons } from "@expo/vector-icons";

export default function Page() {
  const savedSalons = SALONS.filter((salon) => salon.isFav);

  return (
    <SafeAreaView className="flex-1 bg-light">
      <FlatList
        data={savedSalons}
        renderItem={({ item }) => <Salon salon={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
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
        <View className="flex-row items-center gap-4 mt-auto p-4">
          {salon.profilePicture ? (
            <Image
              source={{ uri: salon.profilePicture }}
              className="w-16 h-16 rounded-full"
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
              size={32}
              color="#b361d4"
              className="absolute top-2 left-2 z-30"
            />
          )}
        </View>
      </ImageBackground>
    </Pressable>
  );
}
