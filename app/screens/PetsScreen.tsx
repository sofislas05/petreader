import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { getPets, Pet } from "../lib/pets";

interface Props {
  onBack: () => void;
  onSelectPet: (pet: Pet) => void;
  onAddPet: () => void;
}

export default function PetsScreen({
  onBack,
  onSelectPet,
  onAddPet,
}: Props) {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    async function loadPets() {
      const data = await getPets();
      setPets(data);
    }

    loadPets();
  }, []);

  return (
    <View style={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Select a pet</Text>

      {pets.map((pet) => (
        <Pressable
          key={pet.id}
          style={styles.petCard}
          onPress={() => onSelectPet(pet)}
        >
          {pet.photo_url ? (
            <Image
              source={{ uri: pet.photo_url }}
              style={styles.petImage}
            />
          ) : (
            <View style={styles.petImage} />
          )}

          <View>
            <Text style={styles.petName}>{pet.name}</Text>

            <Text style={styles.petBreed}>
              {pet.breed || "Unknown breed"}
            </Text>
          </View>
        </Pressable>
      ))}

      <Pressable style={styles.addPetCard} onPress={onAddPet}>
        <Text style={styles.addPetText}>+ Add a pet</Text>
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
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 24,
  },

  title: {
    fontFamily: "Itim_400Regular",
    fontSize: 36,
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
    fontFamily: "Itim_400Regular",
    fontSize: 28,
    color: "#5F7428",
  },

  petBreed: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 16,
  },

  addPetCard: {
    borderRadius: 16,
    padding: 18,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFF9E8",
    justifyContent: "center",
  },

  addPetText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 28,
  },
});