import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  onBack: () => void;
  onCapture: () => void;
}

export default function CameraScreen({ onBack, onCapture }: Props) {
  return (
    <View style={styles.screen}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Capture a picture{"\n"}of your pet</Text>

      <View style={styles.cameraBox} />

      <Pressable style={styles.boneButton} onPress={onCapture}>
        <View style={styles.boneCircleLeft} />
        <View style={styles.boneMiddle} />
        <View style={styles.boneCircleRight} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#BFD86B",
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 28,
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
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 34,
    marginTop: 35,
    marginBottom: 24,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 3,
  },

  cameraBox: {
    width: "100%",
    height: 520,
    backgroundColor: "#FFF9E8",
    borderRadius: 28,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },

  boneButton: {
    marginTop: 45,
    width: 170,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  boneMiddle: {
    position: "absolute",
    width: 120,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#5F7428",
  },

  boneCircleLeft: {
    position: "absolute",
    left: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#5F7428",
  },

  boneCircleRight: {
    position: "absolute",
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#5F7428",
  },
});