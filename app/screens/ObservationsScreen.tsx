import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  onBack: () => void;
  onTryAgain: () => void;
  onAccurate: () => void;
}

export default function ObservationsScreen({
  onBack,
  onTryAgain,
  onAccurate,
}: Props) {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <Text style={styles.title}>We observed...</Text>

      <View style={styles.card}>
        <Text style={styles.observation}>• Tail up</Text>
        <Text style={styles.observation}>• Tongue out</Text>
        <Text style={styles.observation}>• Belly down</Text>
        <Text style={styles.observation}>• Ears up</Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable style={styles.tryButton} onPress={onTryAgain}>
          <Text style={styles.buttonText}>Try again</Text>
        </Pressable>

        <Pressable style={styles.accurateButton} onPress={onAccurate}>
          <Text style={styles.buttonText}>Accurate!</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#BFD86B",
    paddingHorizontal: 28,
    paddingTop: 75,
  },

  backButton: {
    position: "absolute",
    top: 62,
    left: 28,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#5F7428",
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 34,
    marginTop: -4,
  },

  title: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 36,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 12,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 3,
  },

  card: {
    backgroundColor: "#FFF9E8",
    borderRadius: 28,
    padding: 30,
    height: 560,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  observation: {
    fontFamily: "Itim_400Regular",
    fontSize: 30,
    color: "#5F7428",
    fontWeight: "700",
    marginBottom: 14,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  tryButton: {
    backgroundColor: "#FFB16B",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    minWidth: 145,
    alignItems: "center",
    elevation: 4,
  },

  accurateButton: {

    backgroundColor: "#5F7428",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    minWidth: 145,
    alignItems: "center",
    elevation: 4,
  },

  buttonText: {
    fontFamily: "Itim_400Regular",

    color: "white",
    fontSize: 24,
    fontWeight: "800",
  },
});