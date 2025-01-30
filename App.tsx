import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import { ShoppingListItem } from "./components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      {/* This gives us ability to add absolute position to fill up the whole screen 
      Ordering matters!!!
      */}
      {/* <View style={[StyleSheet.absoluteFill, { backgroundColor: "pink" }]} /> */}
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Sugar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
