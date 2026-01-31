import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

const Jobs = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome to the Jobs screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default Jobs;