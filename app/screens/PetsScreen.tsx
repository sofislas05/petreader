import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  onBack: () => void;
  onSelectPet: () => void;
}

export default function PetsScreen({ onBack, onSelectPet }: Props) {  return (
    <View style={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>


      <Text style={styles.title}>Select a pet</Text>

      <Pressable style={styles.petCard} onPress={onSelectPet}>
        <View style={styles.petImage} />
        <Text style={styles.petName}>Dona</Text>
      </Pressable>

      <Pressable style={styles.petCard} onPress={onSelectPet}>
        <View style={styles.petImage} />
        <Text style={styles.petName}>Rita</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#BFD86B",
    padding: 24,
    justifyContent: "center",
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
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "white",
    marginBottom: 22,
    alignSelf: "center",
  },

  petCard: {
    backgroundColor: "#FFF9E8",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  petImage: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#5F7428",
    marginRight: 18,
  },

  petName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#5F7428",
  },
});