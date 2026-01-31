import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const Notifications = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Welcome to the Notifications screen
        </Text>
      </View>

      <Ionicons
        name="home"
        size={50}
        color="black"
        style={{ marginTop: 20 }}
        onPress={() => {
          router.back();
        }}
      />
    </SafeAreaView>
  );
};
export default Notifications;