import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
};

export function ShoppingListItem({ name }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "Here goes the additional text",
      [
        {
          text: "Yes",
          onPress: () => console.log(`Ok, deleting ${name}`),
          style: "destructive",
        },
        { text: "No", style: "cancel" },
        // eslint-disable-next-line prettier/prettier
      ]
    );
  };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  button: { backgroundColor: theme.colorBlack, padding: 8, borderRadius: 6 },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
