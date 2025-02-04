import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import { theme } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IdeaScreen() {
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [showSearchBar, setSearchBar] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          selectedEmoji ? styles.emojiSelected && styles.emoji : undefined,
        ]}
      >
        {selectedEmoji ? (
          <Text style={styles.emojiText}>{selectedEmoji}</Text>
        ) : (
          <Text style={{ color: theme.colorGrey }}>
            Please select the emoji you would like to use
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={() => setSearchBar((val) => (val = !val))}
        style={[
          styles.pickerButton,
          {
            backgroundColor: showSearchBar
              ? theme.colorGrey
              : theme.colorCerulean,
          },
        ]}
      >
        <Text style={[styles.buttonText]}>
          {showSearchBar ? "Close" : "Open"} Emoji Picker
        </Text>
      </TouchableOpacity>
      {showSearchBar && (
        <EmojiSelector
          category={Categories.all}
          showTabs
          showSearchBar
          showHistory
          columns={6}
          placeholder="Search emoji..."
          onEmojiSelected={(emoji) => {
            setSelectedEmoji(emoji);
            console.log(emoji);
          }}
          showSectionTitles
          theme={theme.colorCerulean}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    paddingTop: 8,
  },
  pickerButton: {
    backgroundColor: theme.colorCerulean,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: theme.colorWhite,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  emoji: {
    width: 96,
    height: 96,
    margin: 24,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: theme.colorCerulean,
    alignItems: "center",
    justifyContent: "center",
  },
  emojiSelected: {
    borderWidth: 1,
    borderColor: theme.colorCerulean,
    padding: 12,
    borderRadius: 6,
  },
  emojiText: {
    fontSize: 48,
  },
});
