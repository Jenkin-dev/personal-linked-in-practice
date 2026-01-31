import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

const Network = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome to the Network screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default Network;