import { View, Text, Pressable, StyleSheet } from "react-native";
import type { Evidence } from "../engine/types";
import BackButton from "../components/BackButton";

interface Props {
  evidence: Evidence | null;
  onBack: () => void;
  onTryAgain: () => void;
  onAccurate: () => void;
}

function formatValue(value?: string) {
  if (!value) return "Unknown";
  return value.replaceAll("_", " ");
}

export default function ObservationsScreen({
  evidence,
  onBack,
  onTryAgain,
  onAccurate,
}: Props) {
  return (
    <View style={styles.screen}>
      <BackButton onPress={onBack} />

      <Text style={styles.title}>We observed...</Text>

      <View style={styles.card}>
        <Text style={styles.observation}>
          • Posture: {formatValue(evidence?.posture)}
        </Text>
        <Text style={styles.observation}>
          • Tail: {formatValue(evidence?.tail)}
        </Text>
        <Text style={styles.observation}>
          • Ears: {formatValue(evidence?.ears)}
        </Text>
        <Text style={styles.observation}>
          • Tongue: {formatValue(evidence?.tongue)}
        </Text>
        <Text style={styles.observation}>
          • Activity: {formatValue(evidence?.activityChange)}
        </Text>
        <Text style={styles.observation}>
          • Head: {formatValue(evidence?.headPosition)}
        </Text>
        <Text style={styles.observation}>
          • Appetite changed: {formatValue(evidence?.appetiteChanged)}
        </Text>
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

  title: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 44,
    textAlign: "center",
    marginTop: 75,
    marginBottom: 22,
  },

  card: {
    backgroundColor: "#FFF9E8",
    borderRadius: 28,
    padding: 30,
    minHeight: 480,
  },

  observation: {
    fontFamily: "Itim_400Regular",
    fontSize: 25,
    color: "#5F7428",
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
  },

  accurateButton: {
    backgroundColor: "#5F7428",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 20,
    minWidth: 145,
    alignItems: "center",
  },

  buttonText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 24,
  },
});