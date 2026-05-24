import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
interface Props {
  onBack: () => void;
  onDone: () => void;
}

export default function RecommendationScreen({ onBack, onDone }: Props) {
  return (
  <ScrollView contentContainerStyle={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Recommendation</Text>

      <View style={styles.card}>
        <Text style={styles.mainText}>
          Dona seems most consistent with playful or attention-seeking behavior.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Try this:</Text>
          <Text style={styles.bullet}>• Offer a short play session.</Text>
          <Text style={styles.bullet}>• Check if she wants interaction or stimulation.</Text>
          <Text style={styles.bullet}>• Observe if her behavior changes afterward.</Text>
        </View>

        <View style={styles.warningBox}>
          <Text style={styles.warningTitle}>Important</Text>
          <Text style={styles.warningText}>
            This is not a medical diagnosis. If behavior is unusual, persistent,
            or concerning, contact a veterinarian.
          </Text>
        </View>
      </View>

      <Pressable style={styles.button} onPress={onDone}>
        <Text style={styles.buttonText}>Done</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingBottom: 40,
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
    marginTop: 30,
    marginBottom: 22,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 3,
  },

  card: {
    backgroundColor: "#FFF9E8",
    borderRadius: 28,
    padding: 26,
    minHeight: 500,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  mainText: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 31,
    marginBottom: 28,
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 10,
  },

  bullet: {
    color: "#5F7428",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 26,
    marginBottom: 8,
  },

  warningBox: {
    backgroundColor: "#FFE2BC",
    borderRadius: 18,
    padding: 18,
    marginTop: 10,
  },

  warningTitle: {
    fontFamily: "Itim_400Regular",

    color: "#5F7428",
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 6,
  },

  warningText: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
  },

  button: {
  backgroundColor: "#5F7428",
  paddingVertical: 16,
  borderRadius: 20,
  marginTop: 12,
  marginBottom: 40,
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