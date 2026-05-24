import { View, Text, Pressable, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";
import type { Posterior } from "../engine/types";


interface Props {
  posterior: Posterior | null;
  onBack: () => void;
  onContinue: () => void;
}

export default function ResultsScreen({ posterior, onBack, onContinue }: Props) {
  return (
    <View style={styles.screen}>
      <BackButton onPress={onBack} />

      <Text style={styles.title}>Possible states</Text>

      <View style={styles.card}>
        {posterior &&
        Object.entries(posterior).map(([state, probability]) => (
            <ResultBar
              key={state}
              label={state.replaceAll("_", " ")}
              percent={Math.round(probability * 100)}
            />
          ))}
      </View>

      <Pressable style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>What should I do?</Text>
      </Pressable>
    </View>
  );
}

function ResultBar({ label, percent }: { label: string; percent: number }) {
  return (
    <View style={styles.resultItem}>
      <View style={styles.resultHeader}>
        <Text style={styles.resultLabel}>{label}</Text>
        <Text style={styles.resultPercent}>{percent}%</Text>
      </View>

      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${percent}%` }]} />
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
    fontSize: 42,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 75,
    marginBottom: 22,

  },

  card: {
    backgroundColor: "#FFF9E8",
    borderRadius: 28,
    padding: 26,
    minHeight: 470,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  resultItem: {
    marginBottom: 28,
  },

  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  resultLabel: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 18,
    fontWeight: "800",
  },

  resultPercent: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 18,
    fontWeight: "800",
  },

  barBackground: {
    width: "100%",
    height: 18,
    borderRadius: 20,
    backgroundColor: "#E6E0C8",
    overflow: "hidden",
  },

  barFill: {
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#FFB16B",
  },

  button: {
    backgroundColor: "#5F7428",
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 20,
    marginTop: 30,
    alignItems: "center",
    elevation: 4,
  },

  buttonText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 22,
    fontWeight: "800",
  },
});