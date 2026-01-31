import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Explicitly define the index screen first */}
      <Stack.Screen name="index" />

      <Stack.Screen name="onboarding" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(home)" />

    </Stack>
  );
};

export default RootLayout;
