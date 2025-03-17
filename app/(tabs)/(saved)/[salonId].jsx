import { SALONS } from "@/db";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";

export default function Page() {
  const [salon, setSalon] = useState(null);
  const { salonId } = useLocalSearchParams();

  useEffect(() => {
    setSalon(SALONS.find((s) => s.id === salonId));
  }, [salonId]);

  if (salon)
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text>{salon.name}</Text>
      </SafeAreaView>
    );
}
