import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  onStart: () => void;
}

export default function HomeScreen({ onStart }: Props) {
  return (
    <View style={styles.screen}>
      <View style={styles.circle} />

      <Pressable style={styles.button} onPress={onStart}>
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#BFD86B",
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "#5F7428",
    marginBottom: 28,
  },

  button: {
    backgroundColor: "#FFB16B",
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 14,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});