import { useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import PetsScreen from "./screens/PetsScreen";
import ProfileScreen from "./screens/ProfileScreen";

type Screen = "home" | "pets" | "profile";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");

  if (screen === "pets") {
    return (
      <PetsScreen
        onBack={() => setScreen("home")}
        onSelectPet={() => setScreen("profile")}
      />
    );
  }

  if (screen === "profile") {
    return (
      <ProfileScreen
        onBack={() => setScreen("pets")}
        onContinue={() => console.log("go to observations next")}
      />
    );
  }

  return <HomeScreen onStart={() => setScreen("pets")} />;
}