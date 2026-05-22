import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  onBack: () => void;
  onContinue: () => void;
}

export default function ProfileScreen({ onBack, onContinue }: Props) {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <View style={styles.card}>
        <View style={styles.petImage} />

        <Text style={styles.name}>Dona</Text>

        <Text style={styles.info}>Age: 6 months</Text>
        <Text style={styles.info}>Species: Dog</Text>
        <Text style={styles.info}>Breed: Schnauzer</Text>
        <Text style={styles.info}>Energy: High</Text>
        <Text style={styles.info}>Health condition: No</Text>

        <Pressable style={styles.saveButton} onPress={onContinue}>
          <Text style={styles.buttonText}>Analyze behavior</Text>
        </Pressable>

        <Pressable style={styles.removeButton}>
          <Text style={styles.buttonText}>Remove pet</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#BFD86B",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  backButton: {
    position: "absolute",
    top: 62,
    left: 28,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#6B7F2A",
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    color: "white",
    fontSize: 24,
    marginTop: -2,
  },

  card: {
    width: "90%",
    backgroundColor: "#FFF9E8",
    borderRadius: 18,
    padding: 28,
    alignItems: "center",
  },

  petImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#5F7428",
    marginBottom: 18,
  },

  name: {
    fontSize: 26,
    fontWeight: "800",
    color: "#5F7428",
    marginBottom: 16,
  },

  info: {
    width: "100%",
    fontSize: 17,
    color: "#5F7428",
    fontWeight: "600",
    marginBottom: 10,
  },

  saveButton: {
    backgroundColor: "#5F7428",
    paddingVertical: 13,
    paddingHorizontal: 34,
    borderRadius: 14,
    marginTop: 24,
    width: "100%",
    alignItems: "center",
  },

  removeButton: {
    backgroundColor: "#FFB16B",
    paddingVertical: 13,
    paddingHorizontal: 34,
    borderRadius: 14,
    marginTop: 12,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
});