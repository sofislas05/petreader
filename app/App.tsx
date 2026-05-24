import { useState } from "react";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import { analyzePhoto } from "./engine/analyzePhoto";
import type { Evidence } from "./engine/types";

import HomeScreen from "./screens/HomeScreen";
import PetsScreen from "./screens/PetsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CameraScreen from "./screens/CameraScreen";
import ObservationsScreen from "./screens/ObservationsScreen";
import ResultsScreen from "./screens/ResultsScreen";
import RecommendationScreen from "./screens/RecommendationScreen";
import AddPetScreen from "./screens/AddPetScreen";
import ContextQuestionsScreen from "./screens/ContextQuestionsScreen";
import type { ActivityChange, YesNo } from "./engine/types";

import type { Pet } from "./lib/pets";
import { deletePet } from "./lib/pets";

import { inferPetState } from "./engine/inference";
import type { Posterior } from "./engine/types";


type Screen =
  | "home"
  | "pets"
  | "profile"
  | "camera"
  | "observations"
  | "results"
  | "recommendation"
  | "addPet"
  | "contextQuestions";

export default function App() {
  const [fontsLoaded] = useFonts({
    Itim_400Regular,
  });

  const [screen, setScreen] = useState<Screen>("home");
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [observedEvidence, setObservedEvidence] = useState<Evidence | null>(null);
  const [posterior, setPosterior] = useState<Posterior | null>(null);
  const [activityChange, setActivityChange] =
  useState<ActivityChange>("normal");

  const [appetiteChanged, setAppetiteChanged] =
  useState<YesNo>("no");

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
        onContinue={() => setScreen("contextQuestions")}
        onRemove={async (petId) => {
          await deletePet(petId);
          setSelectedPet(null);
          setScreen("pets");
        }}
      />
    );
  }

  if (screen === "contextQuestions") {
  return (
    <ContextQuestionsScreen
      activityChange={activityChange}
      appetiteChanged={appetiteChanged}
      onChangeActivity={setActivityChange}
      onChangeAppetite={setAppetiteChanged}
      onBack={() => setScreen("profile")}
      onContinue={() => setScreen("camera")}
    />
  );
}

  if (screen === "camera") {
  return (
    <CameraScreen
      onBack={() => setScreen("contextQuestions")}
      onCapture={async (photoUri) => {
        const photoEvidence = await analyzePhoto(photoUri);

        setObservedEvidence({
          ...photoEvidence,
          activityChange,
          appetiteChanged,
        });

        setScreen("observations");
      }}
    />
  );
}

  if (screen === "observations") {
  return (
    <ObservationsScreen
      evidence={observedEvidence}
      onBack={() => setScreen("camera")}
      onTryAgain={() => setScreen("camera")}
      onAccurate={() => {
        if (selectedPet && observedEvidence) {
          const result = inferPetState(selectedPet, observedEvidence);
          setPosterior(result);
          setScreen("results");
        }
      }}
    />
  );
}

  if (screen === "results") {
    return (
      <ResultsScreen
        posterior={posterior}
        onBack={() => setScreen("observations")}
        onContinue={() => setScreen("recommendation")}
      />
    );
  }

  if (screen === "recommendation") {
  return (
    <RecommendationScreen
      posterior={posterior}
      onBack={() => setScreen("results")}
      onDone={() => setScreen("pets")}
    />
  );
}

  return <HomeScreen onStart={() => setScreen("pets")} />;
}