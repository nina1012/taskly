import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function CounterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
      <Link
        href="/"
        style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}
      >
        Go to /
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
