import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Explicitly define the index screen first */}
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />

    </Stack>
  );
};

export default RootLayout;
