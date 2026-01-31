import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="newscreen" />
    </Stack>
  );
};

export default HomeLayout;
