import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* correct way of conditionally render instead of using && */}
      {!NaN ? (
        <Text
          style={{
            backgroundColor: "pink",
            paddingHorizontal: 8,
            paddingVertical: 16,
          }}
        >
          Open up App.tsx to start working on your app!
        </Text>
      ) : (
        <Text>This will be ignored 🤖</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
