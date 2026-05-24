import { View, Text, Pressable, StyleSheet } from "react-native";
import type { ActivityChange, YesNo } from "../engine/types";
import BackButton from "../components/BackButton";

interface Props {
  activityChange: ActivityChange;
  appetiteChanged: YesNo;
  onChangeActivity: (value: ActivityChange) => void;
  onChangeAppetite: (value: YesNo) => void;
  onBack: () => void;
  onContinue: () => void;
}

function OptionButton({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={[styles.optionButton, selected && styles.optionSelected]}
      onPress={onPress}
    >
      <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function ContextQuestionsScreen({
  activityChange,
  appetiteChanged,
  onChangeActivity,
  onChangeAppetite,
  onBack,
  onContinue,
}: Props) {
  return (
    <View style={styles.screen}>
      <BackButton onPress={onBack} />

      <Text style={styles.title}>Before the photo...</Text>

      <View style={styles.card}>
        <Text style={styles.question}>
          How is your pet’s activity compared to usual?
        </Text>

        <View style={styles.optionGroup}>
          <OptionButton
            label="Less active"
            selected={activityChange === "less_active_than_usual"}
            onPress={() => onChangeActivity("less_active_than_usual")}
          />
          <OptionButton
            label="Normal"
            selected={activityChange === "normal"}
            onPress={() => onChangeActivity("normal")}
          />
          <OptionButton
            label="More active"
            selected={activityChange === "more_active_than_usual"}
            onPress={() => onChangeActivity("more_active_than_usual")}
          />
        </View>

        <Text style={styles.question}>Has their appetite changed?</Text>

        <View style={styles.optionGroup}>
          <OptionButton
            label="No"
            selected={appetiteChanged === "no"}
            onPress={() => onChangeAppetite("no")}
          />
          <OptionButton
            label="Yes"
            selected={appetiteChanged === "yes"}
            onPress={() => onChangeAppetite("yes")}
          />
        </View>

        <Pressable style={styles.continueButton} onPress={onContinue}>
          <Text style={styles.continueText}>Continue to camera</Text>
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
    paddingTop: 90,
  },

  title: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 38,
    textAlign: "center",
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#FFF9E8",
    borderRadius: 28,
    padding: 24,
  },

  question: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 24,
    marginBottom: 12,
  },

  optionGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 28,
  },

  optionButton: {
    backgroundColor: "#E6E0C8",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
  },

  optionSelected: {
    backgroundColor: "#5F7428",
  },

  optionText: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 18,
  },

  optionTextSelected: {
    color: "white",
  },

  continueButton: {
    backgroundColor: "#FFB16B",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 12,
  },

  continueText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 22,
  },
});