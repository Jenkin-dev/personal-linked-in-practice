import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

const Post = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome to the Post screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default Post;
