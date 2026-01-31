import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

const NewScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text>This is a new screen</Text>
      </View>

      <Pressable style={{ marginTop: 20, padding: 10, backgroundColor: "lightgray" }}
        onPress={() => {
          router.back();
        }}
      >
        <Text>Return to tabs</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default NewScreen;
