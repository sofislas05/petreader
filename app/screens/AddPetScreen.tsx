import { useState } from "react";
import BackButton from "../components/BackButton";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { createPet } from "../lib/pets";

interface Props {
  onBack: () => void;
  onSave: () => void;
}

type OptionProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

function OptionButton({ label, selected, onPress }: OptionProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.option, selected && styles.optionSelected]}
    >
      <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function AddPetScreen({ onBack, onSave }: Props) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const [ageGroup, setAgeGroup] = useState<
    "puppy" | "adult" | "senior"
  >("adult");

  const [energyLevel, setEnergyLevel] = useState<
    "low" | "medium" | "high"
  >("medium");

  const [healthCondition, setHealthCondition] = useState<
    "yes" | "no"
  >("no");

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  }

  async function handleSavePet() {
    try {
      await createPet({
        name,
        breed,
        photo_url: photoUri ?? undefined,
        age_group: ageGroup,
        energy_level: energyLevel,
        has_known_health_condition: healthCondition,
      });

      onSave();
    } catch (error) {
      console.error("Could not save pet:", error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <BackButton onPress={onBack} />

      <Text style={styles.title}>Add a pet</Text>

      <View style={styles.card}>
        <Pressable style={styles.photoPicker} onPress={pickImage}>
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.photoPreview} />
          ) : (
            <Text style={styles.photoText}>+ Add photo</Text>
          )}
        </Pressable>

        <Text style={styles.label}>Name</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Dona"
          placeholderTextColor="#9AAA62"
          style={styles.input}
        />

        <Text style={styles.label}>Breed</Text>

        <TextInput
          value={breed}
          onChangeText={setBreed}
          placeholder="Schnauzer"
          placeholderTextColor="#9AAA62"
          style={styles.input}
        />

        <Text style={styles.label}>Age group</Text>

        <View style={styles.optionRow}>
          <OptionButton
            label="Puppy"
            selected={ageGroup === "puppy"}
            onPress={() => setAgeGroup("puppy")}
          />

          <OptionButton
            label="Adult"
            selected={ageGroup === "adult"}
            onPress={() => setAgeGroup("adult")}
          />

          <OptionButton
            label="Senior"
            selected={ageGroup === "senior"}
            onPress={() => setAgeGroup("senior")}
          />
        </View>

        <Text style={styles.label}>Energy level</Text>

        <View style={styles.optionRow}>
          <OptionButton
            label="Low"
            selected={energyLevel === "low"}
            onPress={() => setEnergyLevel("low")}
          />

          <OptionButton
            label="Medium"
            selected={energyLevel === "medium"}
            onPress={() => setEnergyLevel("medium")}
          />

          <OptionButton
            label="High"
            selected={energyLevel === "high"}
            onPress={() => setEnergyLevel("high")}
          />
        </View>

        <Text style={styles.label}>Known health condition?</Text>

        <View style={styles.optionRow}>
          <OptionButton
            label="No"
            selected={healthCondition === "no"}
            onPress={() => setHealthCondition("no")}
          />

          <OptionButton
            label="Yes"
            selected={healthCondition === "yes"}
            onPress={() => setHealthCondition("yes")}
          />
        </View>

        <Pressable style={styles.saveButton} onPress={handleSavePet}>
          <Text style={styles.saveText}>Save pet</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: "#BFD86B",
    paddingHorizontal: 28,
    paddingTop: 75,
    paddingBottom: 40,
  },

  title: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 44,
    textAlign: "center",
    marginTop: 60,
    marginBottom: 24,
  },

  card: {
    backgroundColor: "#FFF9E8",
    borderRadius: 28,
    padding: 24,
  },

  label: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
    fontSize: 18,
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 17,
    color: "#5F7428",
    borderWidth: 1,
    borderColor: "#E6E0C8",
  },

  optionRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
    flexWrap: "wrap",
  },

  option: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: "#E6E0C8",
  },

  optionSelected: {
    backgroundColor: "#5F7428",
  },

  optionText: {
    fontFamily: "Itim_400Regular",
    color: "#5F7428",
  },

  optionTextSelected: {
    color: "white",
  },

  saveButton: {
    backgroundColor: "#FFB16B",
    paddingVertical: 16,
    borderRadius: 18,
    marginTop: 28,
    alignItems: "center",
  },

  saveText: {
    fontFamily: "Itim_400Regular",
    color: "white",
    fontSize: 20,
  },

  photoPicker: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E6E0C8",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    overflow: "hidden",
  },

  photoPreview: {
    width: "100%",
    height: "100%",
  },

  photoText: {
    color: "#5F7428",
    fontSize: 18,
    fontFamily: "Itim_400Regular",
  },
});