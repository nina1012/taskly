import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

export default function CounterScreen() {
  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync();
    console.log(result);
    if (result === "granted") {
      console.log(Notifications);
      // await Notifications.scheduleNotificationAsync({
      //   content: {
      //     title: "I'm a notification from your app 📨",
      //   },
      //   trigger: {
      //     seconds: 5,
      //     type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      //     repeats: false,
      //   },
      // });
    } else {
      if (Device.isDevice)
        Alert.alert(
          "Unable to schedule notification",
          // eslint-disable-next-line prettier/prettier
          "Enable the notification permission for Expo Go in settings"
        );
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>Schedule notification</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: theme.colorBlack,
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
