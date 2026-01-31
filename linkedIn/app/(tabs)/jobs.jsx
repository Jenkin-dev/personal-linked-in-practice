import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const Jobs = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Welcome to the Jobs screen
        </Text>

        <Ionicons
          name="home"
          size={50}
          color="black"
          style={{ marginTop: 20 }}
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Jobs;
