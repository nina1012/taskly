import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="counter" />
      {/* <Stack.Screen
        name="counter"
        options={{ title: "Counter", presentation: "modal" }}
      /> */}
      <Tabs.Screen name="idea" options={{ title: "Idea" }} />
    </Tabs>
  );
}
