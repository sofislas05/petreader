import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import type { Pet } from "../lib/pets";

interface Props {
  pet: Pet | null;
  onBack: () => void;
  onContinue: () => void;
  onRemove: (petId: string) => void;
}

export default function ProfileScreen({
  pet,
  onBack,
  onContinue,
  onRemove,
}: Props) {
  if (!pet) return null;

  return (
    <View style={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <View style={styles.card}>
        {pet.photo_url ? (
          <Image source={{ uri: pet.photo_url }} style={styles.petImage} />
        ) : (
          <View style={styles.petImage} />
        )}

        <Text style={styles.name}>{pet.name}</Text>

        <Text style={styles.info}>
          Age group: {pet.age_group}
        </Text>

        <Text style={styles.info}>
          Breed: {pet.breed || "Unknown"}
        </Text>

        <Text style={styles.info}>
          Energy level: {pet.energy_level}
        </Text>

        <Text style={styles.info}>
          Health condition: {pet.has_known_health_condition}
        </Text>

        <Pressable style={styles.saveButton} onPress={onContinue}>
          <Text style={styles.buttonText}>Analyze behavior</Text>
        </Pressable>

        <Pressable style={styles.removeButton} onPress={() => onRemove(pet.id!)}>
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
    fontFamily: "Itim_400Regular",
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
    fontFamily: "Itim_400Regular",
    fontSize: 30,
    color: "#5F7428",
    marginBottom: 16,
  },

  info: {
    fontFamily: "Itim_400Regular",
    width: "100%",
    fontSize: 17,
    color: "#5F7428",
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
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 17,
  },
});