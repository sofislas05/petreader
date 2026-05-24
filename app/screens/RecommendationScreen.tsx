import { View, Text, Pressable, StyleSheet } from "react-native";
import type { Posterior, HiddenState } from "../engine/types";
import { getTopState } from "../engine/inference";

interface Props {
  posterior: Posterior | null;
  onBack: () => void;
  onDone: () => void;
}

const recommendations: Record<
  HiddenState,
  { summary: string; actions: string[] }
> = {
  normal_comfort: {
    summary: "Your pet seems most consistent with normal comfort.",
    actions: [
      "Let them rest or continue what they were doing.",
      "Keep observing casually.",
      "No urgent action is suggested from this observation.",
    ],
  },

  hungry_or_routine_need: {
    summary: "Your pet may be showing signs of a routine need.",
    actions: [
      "Check food, water, or usual schedule.",
      "Consider whether it is close to meal or walk time.",
      "Observe if behavior changes after meeting the routine need.",
    ],
  },

  playful_attention: {
    summary: "Your pet seems most consistent with playful or attention-seeking behavior.",
    actions: [
      "Offer a short play session.",
      "Check if they want interaction or stimulation.",
      "Observe if their behavior changes afterward.",
    ],
  },

  possible_stress: {
    summary: "Your pet may be showing possible signs of stress.",
    actions: [
      "Reduce noise or stimulation around them.",
      "Give them a calm, familiar space.",
      "Monitor whether the behavior persists or worsens.",
    ],
  },

  possible_discomfort: {
    summary: "Your pet may be showing possible signs of discomfort.",
    actions: [
      "Avoid forcing movement or play.",
      "Monitor posture, appetite, and activity closely.",
      "If this is unusual or persistent, consider contacting a veterinarian.",
    ],
  },

  possible_health_concern: {
    summary: "This observation may suggest a possible health concern.",
    actions: [
      "Monitor closely and compare with their normal behavior.",
      "Check for appetite, activity, or posture changes.",
      "Contact a veterinarian if symptoms persist, worsen, or feel unusual.",
    ],
  },
};

function formatPercent(value: number) {
  return `${Math.round(value * 100)}%`;
}

export default function RecommendationScreen({
  posterior,
  onBack,
  onDone,
}: Props) {
  if (!posterior) return null;

  const topState = getTopState(posterior);
  const recommendation = recommendations[topState];

  return (
    <View style={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Recommendation</Text>

      <View style={styles.card}>
        <Text style={styles.mainText}>{recommendation.summary}</Text>

        <Text style={styles.confidenceText}>
          Confidence: {formatPercent(posterior[topState])}
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Try this:</Text>

          {recommendation.actions.map((action) => (
            <Text key={action} style={styles.bullet}>
              • {action}
            </Text>
          ))}
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#BFD86B",
    paddingHorizontal: 28,
    paddingTop: 75,
    paddingBottom: 28,
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
    textAlign: "center",
    marginTop: 30,
    marginBottom: 18,
  },

  card: {
    backgroundColor: "#FFF9E8",
    borderRadius: 28,
    padding: 24,
    flex: 1,
  },

  mainText: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 23,
    lineHeight: 30,
    marginBottom: 10,
  },

  confidenceText: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 20,
    marginBottom: 22,
  },

  section: {
    marginBottom: 22,
  },

  sectionTitle: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 22,
    marginBottom: 8,
  },

  bullet: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 6,
  },

  warningBox: {
    backgroundColor: "#FFE2BC",
    borderRadius: 18,
    padding: 16,
    marginTop: "auto",
  },

  warningTitle: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 19,
    marginBottom: 6,
  },

  warningText: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 16,
    lineHeight: 22,
  },

  button: {
    backgroundColor: "#5F7428",
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 14,
    alignItems: "center",
  },

  buttonText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 22,
  },
});