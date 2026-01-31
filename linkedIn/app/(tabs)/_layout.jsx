import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "cyan",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="network"
        options={{
          title: "Network",
          tabBarIcon: () => <Entypo name="users" size={24} color="black" />,
        }}
      /> */}
      <Tabs.Screen
        name="post"
        options={{
          title: "Post",
          tabBarIcon: ({ color }) => (
            <Ionicons name="duplicate" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color }) => (
            <Ionicons name="briefcase" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
