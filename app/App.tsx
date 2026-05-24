import { useState } from "react";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";

import HomeScreen from "./screens/HomeScreen";
import PetsScreen from "./screens/PetsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CameraScreen from "./screens/CameraScreen";
import ObservationsScreen from "./screens/ObservationsScreen";
import ResultsScreen from "./screens/ResultsScreen";
import RecommendationScreen from "./screens/RecommendationScreen";
import AddPetScreen from "./screens/AddPetScreen";

import type { Pet } from "./lib/pets";
import { deletePet } from "./lib/pets";

type Screen =
  | "home"
  | "pets"
  | "profile"
  | "camera"
  | "observations"
  | "results"
  | "recommendation"
  | "addPet";

export default function App() {
  const [fontsLoaded] = useFonts({
    Itim_400Regular,
  });

  const [screen, setScreen] = useState<Screen>("home");
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  if (!fontsLoaded) {
    return null;
  }

  if (screen === "pets") {
    return (
      <PetsScreen
        onBack={() => setScreen("home")}
        onSelectPet={(pet) => {
          setSelectedPet(pet);
          setScreen("profile");
        }}
        onAddPet={() => setScreen("addPet")}
      />
    );
  }

  if (screen === "addPet") {
    return (
      <AddPetScreen
        onBack={() => setScreen("pets")}
        onSave={() => setScreen("pets")}
      />
    );
  }

  if (screen === "profile") {
    return (
      <ProfileScreen
        pet={selectedPet}
        onBack={() => setScreen("pets")}
        onContinue={() => setScreen("camera")}
        onRemove={async (petId) => {
          await deletePet(petId);
          setSelectedPet(null);
          setScreen("pets");
        }}
      />
    );
  }

  if (screen === "camera") {
    return (
      <CameraScreen
        onBack={() => setScreen("profile")}
        onCapture={() => setScreen("observations")}
      />
    );
  }

  if (screen === "observations") {
    return (
      <ObservationsScreen
        onBack={() => setScreen("camera")}
        onTryAgain={() => setScreen("camera")}
        onAccurate={() => setScreen("results")}
      />
    );
  }

  if (screen === "results") {
    return (
      <ResultsScreen
        onBack={() => setScreen("observations")}
        onContinue={() => setScreen("recommendation")}
      />
    );
  }

  if (screen === "recommendation") {
    return (
      <RecommendationScreen
        onBack={() => setScreen("results")}
        onDone={() => setScreen("pets")}
      />
    );
  }

  return <HomeScreen onStart={() => setScreen("pets")} />;
}