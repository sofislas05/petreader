import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  onBack: () => void;
  onContinue: () => void;
}

export default function ResultsScreen({ onBack, onContinue }: Props) {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Possible states</Text>

      <View style={styles.card}>
        <ResultBar label="Normal comfort" percent={42} />
        <ResultBar label="Playful / attention" percent={28} />
        <ResultBar label="Routine need" percent={16} />
        <ResultBar label="Possible stress" percent={9} />
        <ResultBar label="Possible discomfort" percent={5} />
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
    fontSize: 42,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 75,
    marginBottom: 22,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 3,
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